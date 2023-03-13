import React, { useState } from "react";
import {
  Col,
  InputNumber,
  Input,
  Row,
  Slider,
  Form as AntdForm,
  Button,
} from "antd";

import styles from "./PriceFilter.module.scss";

export const PriceFilter: React.FC = () => {
  const [priceValue, setPriceValue] = useState({
    minValue: 200,
    maxValue: 5000,
  });

  const onChangeRange = (newValue: any) => {
    setPriceValue({
      ...priceValue,
      minValue: newValue[0],
      maxValue: newValue[1],
    });
  };

  return (
    <div className={styles.price__filter}>
      <div className={styles.form__row}>
        <span>Price range, $</span>
        <Button type="link" htmlType="submit">
          Apply
        </Button>
      </div>
      <AntdForm.Item name="price" className={styles.form__price__range}>
        <Slider
          range
          min={200}
          max={5000}
          step={100}
          value={[priceValue.minValue, priceValue.maxValue]}
          onChange={onChangeRange}
        />
      </AntdForm.Item>
      <Input.Group className={styles.form__price__inputs}>
        <AntdForm.Item name="price" style={{ marginBottom: "10px" }}>
          <Row className={styles.inputs__wrapper}>
            <Col>
              <label className={styles.numberInputLabel}>Min</label>
              <InputNumber
                className={styles.numberInput}
                min={200}
                max={5000}
                readOnly
                value={priceValue.minValue}
              />
            </Col>
            <Col>
              <label className={styles.numberInputLabel}>Max</label>
              <InputNumber
                className={styles.numberInput}
                min={200}
                max={5000}
                readOnly
                value={priceValue.maxValue}
              />
            </Col>
          </Row>
        </AntdForm.Item>
      </Input.Group>
    </div>
  );
};
