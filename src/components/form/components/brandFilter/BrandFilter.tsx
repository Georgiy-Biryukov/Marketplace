import React from "react";
import { Checkbox, Col, Row, Divider, Form as AntdForm, Button } from "antd";

import { brands } from "helpers/mocData";

import styles from "./BrandFilter.module.scss";

export const BrandFilter = () => {
  return (
    <AntdForm.Item name="brands" className={styles.form__checkboxes}>
      <Checkbox.Group className={styles.checkboxGroup}>
        <Col className={styles.checkboxGroup__col}>
          <Divider className={styles.divider__top} />
          <div className={styles.form__row}>
            <span>Brands</span>
            <Button type="link" htmlType="submit">
              Apply
            </Button>
          </div>
          {brands.map((brand) => {
            return (
              <Row key={brand.value}>
                <Checkbox value={brand.value} className={styles.checkBox}>
                  <span className={styles.checkbox__label}>{brand.label}</span>
                </Checkbox>
              </Row>
            );
          })}
          <Divider className={styles.divider__down} />
        </Col>
      </Checkbox.Group>
    </AntdForm.Item>
  );
};
