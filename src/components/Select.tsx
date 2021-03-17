import { ReactNode } from "react";
import { SelectContainer } from "../styles/components/Select";

interface SelectProps {
  children?: ReactNode;
  onChange?: (value: any) => void;
  size?: 'small' | 'normal';
}

export default function Select({ children, ...props }: SelectProps) {
  return (
    <SelectContainer>
      <select onChange={e => props.onChange(e.target.value)}>
        {children}
      </select>
    </SelectContainer>
  )
}
