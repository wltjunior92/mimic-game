import { ReactNode, useState } from "react";
import { ItemContainer } from "../styles/components/CardItem";

interface CardItemProps {
  children: ReactNode;
}

export default function CardItem(props: CardItemProps) {
  const [isChecked, setIsChecked] = useState(false)

  function changeBackgroundColor() {
    isChecked ? setIsChecked(false) : setIsChecked(true)
  }
  return (
    <ItemContainer onClick={changeBackgroundColor} isChecked={isChecked}>
      <div></div>
      {props.children}
    </ItemContainer>
  )
}
