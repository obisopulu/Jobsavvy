import { useState } from 'react';

export const useHandleButtonActive = (initialState: boolean = false): [boolean, () => void] => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  console.log('stuff')
  return [isActive, toggleActive];
};
