import { ReactNode, useEffect, useState } from "react";
import { Container } from "../styles/components/PlayerCard";

interface Player {
  children: ReactNode;
  name: string;
  color: string;
}

export default function PlayerCard(props: Player) {
  const [points, setPoints] = useState(0)

  function incrementPoints() {
    setPoints(points + 1);
  }

  function decrementPoints() {
    points > 0 && setPoints(points - 1);
  }

  return (
    <Container background={props.color}>
      {props.children}
      <h4>{props.name}</h4>
      <strong>{points}</strong>
      <footer>
        <button onClick={incrementPoints}>+1</button>
        <button onClick={decrementPoints}>-1</button>
      </footer>
    </Container>
  )
}
