import React, { ChangeEvent, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export type InputCounterProps = {};

const InputCounter:React.FC<InputCounterProps> = () => {
  const numberPattern = /^[0-9]*$/;
  const [quantity, setQuantity] = useState<number | string>('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    if (numberPattern.test(value)) setQuantity(value);
  }

  const incrementHandler = () => {
    setQuantity(Number(quantity) + 1);
  }
  const decrementHandler = () => {
    setQuantity(Number(quantity) - 1);
  }

  return (
    <InputGroup size="sm" className="input-counter">
      <Button onClick={decrementHandler}>-</Button>
      <Form.Control
        type="text"
        value={quantity}
        onChange={onChangeHandler}
      />
      <Button onClick={incrementHandler}>+</Button>
    </InputGroup>
  );
};

export default InputCounter;