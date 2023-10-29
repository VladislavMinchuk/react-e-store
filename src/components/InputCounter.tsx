import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export type InputCounterProps = {
  defaultValue?: number | string,
  maxValue?: number | string,
  minValue?: number | string,
  inputChangeHandler?: (value: number | string) => void,
};

const InputCounter:React.FC<InputCounterProps> = ({
  defaultValue = 1,
  maxValue = 10000,
  minValue = 1,
  inputChangeHandler
}) => {
  const numberPattern = /[^0-9]/g;
  const [quantity, setQuantity] = useState<number | string>(defaultValue || '');

  const calculateQuantity = (value: number | string): number => {
    let resulst = Number(value) || 0;
    const max = Number(maxValue);
    const min = Number(minValue);
    if (max !== undefined && resulst > max) resulst = max;
    if (min !== undefined && resulst < min) resulst = min;
    return resulst;
  }

  const updateQuantity = (calculatedValue: number) => {
    if (calculatedValue === Number(quantity)) return; // Don't update state
    setQuantity(calculatedValue);
    if (inputChangeHandler) inputChangeHandler(calculatedValue); // If we have outside handler
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let resultValue: number | string = event.target.value.replace(numberPattern, '');
    const calculatedValue = calculateQuantity(resultValue);
    updateQuantity(calculatedValue);
  }
  
  const incrementHandler = () => {
    const calculatedValue = calculateQuantity(Number(quantity) + 1);
    updateQuantity(calculatedValue);
  }
  
  const decrementHandler = () => {
    const calculatedValue = calculateQuantity(Number(quantity) - 1);
    updateQuantity(calculatedValue);
  }
  
  useEffect(() => {
    // Validate defaultValue
    if (defaultValue) setQuantity(calculateQuantity(defaultValue));
  }, [defaultValue, minValue, maxValue]);

  return (
    <InputGroup size="sm" className="input-counter mx-auto mb-3" style={{ maxWidth: '210px' }}>
      <Button variant="secondary" onClick={decrementHandler}>-</Button>
      <Form.Control
        type="text"
        value={quantity}
        onChange={onChangeHandler}
        className="text-center mx-3"
      />
      <Button variant="secondary" onClick={incrementHandler}>+</Button>
    </InputGroup>
  );
};

export default InputCounter;