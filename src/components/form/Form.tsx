import React from "react";
import { Button, Form as AntdForm } from "antd";

import { useAppDispatch } from "hooks";
import { filterByBrand, filterByPrice } from "store/slices/productsSlice";
import { PriceFilter } from "./components/priceFilter";
import { BrandFilter } from "./components/brandFilter";

import styles from "./Form.module.scss";

export const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form] = AntdForm.useForm();

  const initialValues = {
    brands: [],
    price: [200, 5000],
  };

  const onFinish = (values: any) => {
    const { brands, price } = values;
    dispatch(filterByBrand(brands));
    dispatch(filterByPrice(price));
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <AntdForm
      name="basic"
      form={form}
      className={styles.filterForm}
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <BrandFilter />
      <PriceFilter />
      <AntdForm.Item className={styles.form__submit}>
        <Button htmlType="submit" className={styles.submitBtn} type="default">
          Apply
        </Button>
      </AntdForm.Item>
      <AntdForm.Item className={styles.form__reset}>
        <Button type="link" onClick={onReset} className={styles.resetBtn}>
          Reset filter
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};
