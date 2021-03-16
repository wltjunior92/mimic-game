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
      <div>
        {isChecked &&
          <img src="icons/material-black-check.svg" style={{ height: '13px' }} />
        }
      </div>
      <h4>
        {props.children}
      </h4>
    </ItemContainer>
  )
}
