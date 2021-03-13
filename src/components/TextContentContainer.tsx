import { ReactNode } from "react";
import { TextContainer } from "../styles/components/TextContentContainer";

interface TextContainerProps {
  children: ReactNode;
}

export default function TextContentContainer({ children }: TextContainerProps) {
  return (
    <TextContainer>
      {children}
    </TextContainer>
  )
}
