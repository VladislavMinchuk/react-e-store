import React, { ChangeEvent, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export type InputCounterProps = {};

const InputCounter:React.FC<InputCounterProps> = () => {
  const numberPattern = /^[0-9]*$/;
  const [quantity, setQuantity] = useState<number | string>('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    const resultValue = numberPattern.test(value) ? value : '';
    setQuantity(resultValue);
  }

  return (
    <InputGroup size="sm" className="input-counter">
      <Button>+</Button>
      <Form.Control
        value={quantity}
        onChange={onChangeHandler}
        type="text"
      />
      {/* <input
        type="number"
        value={quantity}
        onChange={onChangeHandler}
      /> */}
      <Button>-</Button>
    </InputGroup>
  );
};

export default InputCounter;