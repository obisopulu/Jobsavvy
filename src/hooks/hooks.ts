import { useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };
  
  return [value, toggleValue];
};

export const useToggleTabList = (initialValue: string): [string, (newValue: string) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  const toggleValue = (newValue: string) => {
    setValue(newValue);
  };
  return [value, toggleValue];
};
