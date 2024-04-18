import { ButtonProps } from '../types/common.type';

export const homeStackedListButtons: ButtonProps[] = [
  {
    symbol: "apply",
    text: "Apply",
    onClick: () => console.log("Appy")
  },
  {
    symbol: "save",
    text: "Save",
    onClick: () => console.log("Save")
  },
]

export const homeTabListButtons: ButtonProps[] = [
  {
    symbol: "all",
    text: "All",
    onClick: () => console.log("Appy")
  },
  {
    symbol: "save",
    text: "Saved",
    onClick: () => console.log("Save")
  },
  {
    symbol: "apply",
    text: "Applied",
    onClick: () => console.log("Save")
  },
]