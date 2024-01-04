import ReactSlider from "react-slider";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../store";
import {
  setSizeFilter,
  setPriceFilter,
  setSortType,
  sortByTypeAction,
  filterByPriceAction,
  filterBySizeAction,
  resetFiltersAction,
} from "../store/slices/productFilters";
import { setGloablLoading, setRenderCondition } from "../store/slices/global.slice";
import Form from "react-bootstrap/Form";
import { Button, Col, Container, Row } from "react-bootstrap";
import { singleProduct } from "../mock-data";
import { productSortTypes } from "../store/slices/productFilters/model";
import "../assets/styles/components/RangeSlider.scss";

export type ProductFiltersProps = {};

const ProductFilters: FC<ProductFiltersProps> = () => {
  const dispatch = useAppDispatch();
  const { filterOptions } = useTypedSelector((state) => state.productFilters);
  const { isLoading, isFirstRender } = useTypedSelector((state) => state.global);
  const [activeButton, setActiveButton] = useState<{ applyBtn: boolean; resetBtn: boolean }>({
    applyBtn: false,
    resetBtn: false,
  });
  const [filterPriceValue, setFilterPriceValue] = useState<number[]>([1, 100]);
  const [resetSlider, setResetSlider] = useState<number>(1);

  // update local state
  const handleUpdateSliderValues = (sliderState: number[]) => {
    const [min, max] = sliderState;
    // if (min < 1) {
    //   sliderState[0] = 1;
    //   return;
    // }
    // DONT WORK
    setFilterPriceValue([min, max]);
  };

  // global store actions
  const handelUpdatePriceFilter = () => {
    const [min, max] = filterPriceValue;
    dispatch(setPriceFilter({ min, max }));
  };
  const handleUpdateCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSizeFilter({ size: e.target.value, checked: e.target.checked }));
  };
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(e.target.value as productSortTypes));
  };

  const aplyFilters = () => {
    dispatch(setGloablLoading(true));
    setTimeout(() => {
      dispatch(filterByPriceAction());
      dispatch(filterBySizeAction());
      dispatch(sortByTypeAction());
      dispatch(setGloablLoading(false));
    }, 1000);
    setActiveButton({ resetBtn: true, applyBtn: false });
  };

  const resetFilters = async () => {
    dispatch(setGloablLoading(true));
    setTimeout(() => {
      dispatch(resetFiltersAction());
      dispatch(setGloablLoading(false));
    }, 1000);
    setActiveButton({ ...activeButton, resetBtn: false });
    setFilterPriceValue([1, 100]);
    // re-render slider with default values
    setResetSlider((prev) => prev + 1);
  };

  useEffect(() => {
    if (isFirstRender) {
      dispatch(setRenderCondition(false));
      return;
    }
    setActiveButton({ ...activeButton, applyBtn: true });
  }, [filterOptions]);

  return (
    <Row>
      <Col>

        <p>Product filters</p>

        <hr />

        <Container>
          <ReactSlider
            key={resetSlider}
            onChange={(state) => handleUpdateSliderValues(state)}
            onAfterChange={handelUpdatePriceFilter}
            className="horizontal-slider"
            thumbClassName="range-thumb"
            trackClassName="range-track"
            defaultValue={[1, 100]}
            renderThumb={(props) => <div {...props}></div>}
            pearling
            minDistance={10}
          ></ReactSlider>

          <div className="d-flex justify-content-between">
            <div>{filterPriceValue[0]}$</div>
            <div>{filterPriceValue[1]}$</div>
          </div>
        </Container>

        <hr />

        <Container>
          <Form.Label>Sort products by:</Form.Label>
          <Form.Select defaultValue="Chose option" onChange={(e) => handleChangeSort(e)}>
            <option value={"Chose option"} disabled>
              Chose option
            </option>
            {Object.values(productSortTypes).map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </Container>

        <hr />

        <Container>
          <Form.Label>Sizes:</Form.Label>
          {singleProduct.shoesSize.map(({ size }, i) => (
            <Form.Check
              checked={filterOptions.sizes.includes(size)}
              onChange={(e) => handleUpdateCheckBox(e)}
              value={size}
              key={i}
              id={size}
              label={size}
            ></Form.Check>
          ))}
        </Container>

        <hr />

        <Container className="d-flex flex-column gap-3">
          <Button disabled={!activeButton.applyBtn || isLoading} onClick={aplyFilters}>
            Accept filters
          </Button>
          <Button disabled={!activeButton.resetBtn || isLoading} onClick={resetFilters}>
            Reset filters
          </Button>
        </Container>

      </Col>
    </Row>
  );
};

export default ProductFilters;
