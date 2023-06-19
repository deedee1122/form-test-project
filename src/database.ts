import { IOptions } from "./types/types";
import { nanoid } from "@reduxjs/toolkit";

export const CarBrandsDB: IOptions[] = [
  {
    value: "BMW",
    label: "BMW",
  },
  {
    value: "Mercedes",
    label: "Mercedes",
  },
  {
    value: "Audi",
    label: "Audi",
  },
  {
    value: "Volkswagen",
    label: "Volkswagen",
  },
  {
    value: "Ferrari",
    label: "Ferrari",
  },
  {
    value: "Porsche",
    label: "Porsche",
  },
];

export const ColorOptionsDB: IOptions[] = [
  {
    value: "red",
    label: "Red",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "black",
    label: "Black",
  },
  {
    value: "white",
    label: "White",
  },
];

export const sampleReferenceDB: IOptions[] = [
  {
    value: nanoid(),
    label: nanoid(),
  },
  {
    value: nanoid(),
    label: nanoid(),
  },
  {
    value: nanoid(),
    label: nanoid(),
  },
  {
    value: nanoid(),
    label: nanoid(),
  },
  {
    value: nanoid(),
    label: nanoid(),
  },
  {
    value: nanoid(),
    label: nanoid(),
  },
];
