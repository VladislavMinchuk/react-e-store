import { ChangeEvent, FC, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../store";
import {
  setSizeFilter,
  setPriceFilter,
  setSortType,
  sortByTypeAction,
  filterByPriceAction,
  filterBySizeAction,
} from "../store/slices/productFilters";
import { setGloablLoading } from "../store/slices/global.slice";
import Form from "react-bootstrap/Form";
import { Button, Col, Container, Row } from "react-bootstrap";
import { singleProduct } from "../mock-data";
import { productSortTypes } from "../store/slices/productFilters/model";

export type ProductFiltersProps = {};

const ProductFilters: FC<ProductFiltersProps> = () => {
  const dispatch = useAppDispatch();
  const {filterOptions} = useTypedSelector((state) => state.productFilters);
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [minPrice, setMinPrice] = useState<number>(1);

  const handlePriceUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const valueMax = Number(e.target.value);
    setMaxPrice(valueMax);
    // setMinPrice(value)
    setActiveButton(true);
  };
  const handleSliderMouseUp = () => {
    dispatch(setPriceFilter({ max: maxPrice, min: minPrice }));
  };
  const handleUpdateCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSizeFilter(e.target.value));
    setActiveButton(true);
  };
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(e.target.value as productSortTypes));
    setActiveButton(true);
  };

  const aplyFilters = () => {
    console.log(filterOptions);
    setActiveButton(false);
    dispatch(setGloablLoading(true));
    setTimeout(() => dispatch(setGloablLoading(false)), 300);
    dispatch(filterByPriceAction());
    dispatch(filterBySizeAction());
    dispatch(sortByTypeAction());
  };

  return (
    <Row>
      <Col>
        <p>Product filters</p>

        <hr />

        <Container>
          <Form.Label>Max price:</Form.Label>
          <Form.Range
            min={1}
            max={100}
            className="w-100"
            value={maxPrice}
            onChange={(e) => handlePriceUpdate(e)}
            onMouseUp={handleSliderMouseUp}
          />
          <div>{maxPrice}$</div>
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
          <Button disabled={!activeButton} onClick={aplyFilters}>
            Accept filters
          </Button>
          <Button disabled>Reset filters</Button>
        </Container>
      </Col>
    </Row>
  );
};

export default ProductFilters;
