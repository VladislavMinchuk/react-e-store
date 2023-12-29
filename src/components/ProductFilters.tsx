import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../store";
import {
  filterProductsByPrice,
  filterProductsBySize,
  sortProductsByType,
  updateChosenSizes,
} from "../store/slices/productList.slice";
import { setGloablLoading } from "../store/slices/global.slice";
import Form from "react-bootstrap/Form";
import { Col, Container } from "react-bootstrap";

const selectSortOptions = [
  { type: "low_First", name: "low price first" },
  { type: "high_First", name: "high price first" },
];
export type ProductFiltersProps = {};

const ProductFilters: FC<ProductFiltersProps> = () => {
  const filter = useTypedSelector((state) => state.productList.productFilters);
  const [maxPrice, setMaxPrice] = useState<number>(filter.price.max);
  const dispatch = useAppDispatch();

  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortProductsByType(e.target.value));
  };
  const handleChandeMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const currMaxPriceValue = Number(e.target.value);
    if (currMaxPriceValue < 1) return;
    setMaxPrice(currMaxPriceValue);
  };
  const handleMouseUp = () => {
    dispatch(setGloablLoading(true));

    setTimeout(() => {
      dispatch(filterProductsByPrice(maxPrice));
      dispatch(setGloablLoading(false));
    }, 500);
  };
  const handleUpdateCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateChosenSizes(e.target.value));
  };

  useEffect(() => {
    // console.log(filter.sizes.chosen);
    // console.log(filter.sizes.available);
    dispatch(filterProductsBySize());
  }, [filter.sizes.chosen]);

  return (
    <Col>
      <p>Product filters</p>

      <hr />

      <Container>
        <Form.Label>Max price:</Form.Label>
        <Form.Range
          min={filter.price.min}
          max={filter.price.max}
          className="w-100"
          value={maxPrice}
          onChange={(e) => handleChandeMaxPrice(e)}
          onMouseUp={handleMouseUp}
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
          {selectSortOptions.map((o) => (
            <option value={o.type} key={o.type}>
              {o.name}
            </option>
          ))}
        </Form.Select>
      </Container>

      <hr />

      <Container>
        <Form.Label>Sizes:</Form.Label>
        {filter.sizes.available.map((s, i) => (
          <Form.Check
            checked={filter.sizes.chosen.includes(s)}
            onChange={(e) => handleUpdateCheckBox(e)}
            value={s}
            key={i}
            id={s}
            label={s}
          ></Form.Check>
        ))}
      </Container>
    </Col>
  );
};

export default ProductFilters;
