import * as React from "react";
import { Button, Input } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import clx from "classnames";
import _ from "lodash";
import InputNumber, { InputNumberProps } from "antd/lib/input-number";

interface Props extends InputNumberProps {
  step?: number;
  onChange?: (value?: number) => void;
}
const NumberInput: React.FC<Props> = props => {
  const {
    className,
    min,
    max,
    disabled,
    precision = 0,
    step = 1,
    onChange,
    style,
    value: propsValue,
    ...rest
  } = props;
  const [value, setValue] = React.useState(propsValue);
  const updateValue = val => {
    if (val != null) {
      const newVal = _.clamp(val, min ?? val, max ?? val);
      if (newVal !== value) {
        setValue(newVal);
        onChange?.(newVal);
      }
    }
  };
  return (
    <Input.Group compact style={{ display: "flex" }}>
      <Button
        disabled={disabled || value === min}
        onClick={() => {
          if (value != null) {
            updateValue(value - step);
          }
        }}
        style={{ alignItems: "center" }}
      >
        <MinusOutlined />
      </Button>
      <InputNumber
        {...rest}
        className={clx("hide-arrows", className)}
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        onBlur={e => {
          const parsedVal = parseInt(e.target.value, 10);
          if (!isNaN(parsedVal)) {
            updateValue(parsedVal);
          }
        }}
        precision={precision}
        step={step}
        inputMode={precision === 0 ? "decimal" : "numeric"}
        style={{ ...style, flexGrow: 1 }}
      />
      <Button
        disabled={disabled || value === max}
        onClick={() => {
          if (value != null) {
            updateValue(value + step);
          }
        }}
        style={{ alignItems: "center" }}
      >
        <PlusOutlined />
      </Button>
    </Input.Group>
  );
};

export default NumberInput;
