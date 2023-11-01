import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputCounter from "./InputCounter";

export type ProductOrderQuickFormProps = {
  shoesSize: Array<{size: string, id: number}>, // TODO: should be interface
  addToCartHandler?: Function,
  orderNowHander?: Function
}

const ProductOrderQuickForm:React.FC<ProductOrderQuickFormProps> = ({ shoesSize }) => {
  const [selectedSizeId, setSelectedSizeId] = useState<undefined | number>();

  const selectHandler = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedSizeId(Number(target.value));
  }

  const quantityHandler = (quantity: number | string): void => {
    console.log(quantity);
  }

  return (
    <form className="mb-4">
      <Form.Label htmlFor="size-select">Pick the size</Form.Label>
      <Form.Select
        id="size-select"
        aria-label="Sizes"
        value={selectedSizeId}
        className="mb-2 mb-md-4"
        onChange={selectHandler}
      >
        <option value={0} disabled  hidden>Sizes</option>
        {shoesSize.map(({ size, id }) => {
          return <option key={id} value={id}>{size}</option>
        })}
      </Form.Select>

      <InputCounter inputChangeHandler={quantityHandler}></InputCounter>

      <div className="d-flex flex-row align-items-start justify-content-between">
        <Button disabled={!!selectedSizeId} variant="primary" className="text-white flex-grow-1 mb-2 mb-md-0 me-2">Add to cart</Button>
        <Button disabled={!!selectedSizeId} variant="secondary" className="text-white flex-grow-1">Order now</Button>
      </div>
    </form>
  );
}

export default ProductOrderQuickForm;