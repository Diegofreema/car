import { MouseEventHandler, Dispatch } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  link?: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface OptionsProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
  setFilter: (year: any) => void;
}
