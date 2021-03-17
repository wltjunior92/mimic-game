import React, { ReactNode, useEffect, useRef } from 'react';

interface ScriptElementProps {
  children?: ReactNode;
  text: string;
}

const ReactComment = ({ children, ...props }: ScriptElementProps) => {
  const el: any = useRef();
  useEffect(() => {
    el.current.outerHTML = `${props.text}`;
  }, []);
  return (
    <div ref={el} />
  );
};

export default ReactComment;
