import React, { ReactNode, useEffect, useRef } from 'react';

interface ReactCommentProps {
  children?: ReactNode;
  text: string;
}

const ReactComment = ({ children, ...props }: ReactCommentProps) => {
  const el: any = useRef();
  useEffect(() => {
    el.current.outerHTML = `<!-- ${props.text} -->`;
  }, []);
  return (
    <div ref={el} />
  );
};

export default ReactComment;
