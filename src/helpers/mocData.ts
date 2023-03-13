import huaweiPhone from "assets/products/huaweiPhone.jpg";
import huaweiTablet from "assets/products/huaweiTablet.jpg";
import iphone12 from "assets/products/iphone12.jpg";
import macbook from "assets/products/macbook.jpg";
import appleWatch from "assets/products/appleWatch.jpg";

export const brands = [
  { label: "Samsung", value: "Samsung" },
  { label: "Apple", value: "Apple" },
  { label: "Huawei", value: "Huawei" },
  { label: "Pocco", value: "Pocco" },
  { label: "Lenovo", value: "Lenovo" },
];

export const mocData = [
  {
    id: 1,
    name: "HUAWEI P30 Lite 6/128GB Black",
    price: 257,
    brand: "Huawei",
    discription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
    src: huaweiPhone,
    details: {
      searchName: "HUAWEI P30",
      category: "Electronics",
      type: "Phone",
      material: "Aluminium",
      design: "Modern",
    },
  },
  {
    id: 2,
    name: "Huawei MatePad 10.4 4/128Gb Wi-Fi Grey",
    price: 312,
    brand: "Huawei",
    discription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
    src: huaweiTablet,
    details: {
      searchName: "Huawei MatePad",
      category: "Electronics",
      type: "Tablet",
      material: "Aluminium",
      design: "Modern",
    },
  },
  {
    id: 3,
    name: "Apple Watch SE (2022) GPS 40mm Starlight ",
    price: 320,
    brand: "Apple",
    discription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
    src: appleWatch,
    details: {
      searchName: "Apple Watch",
      category: "Electronics",
      type: "Smart watch",
      material: "Aluminium",
      design: "Modern",
    },
  },
  {
    id: 4,
    name: "Apple iPhone 12 128GB Red",
    price: 804,
    brand: "Apple",
    discription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
    src: iphone12,
    details: {
      searchName: "Apple iPhone 12",
      category: "Electronics",
      type: "Phone",
      material: "Aluminium",
      design: "Modern",
    },
  },
  {
    id: 5,
    name: 'Laptop Apple MacBook Pro 16" M2 Pro 512GB 2023',
    price: 2980,
    brand: "Apple",
    discription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
    src: macbook,
    details: {
      searchName: "Apple MacBook",
      category: "Electronics",
      type: "Laptop",
      material: "Aluminium",
      design: "Modern",
    },
  },
];
