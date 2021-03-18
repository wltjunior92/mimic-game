import React, { ReactNode, useEffect, useRef } from 'react';

interface ScriptElementProps {
  children?: ReactNode;
  text: string;
}

const ReactComment = ({ children, ...props }: ScriptElementProps) => {
  const el: any = useRef();
  useEffect(() => {
    el.current.outerHTML = `<script>${props.text}</script>`;
  }, []);
  return (
    <div ref={el} />
  );
};

export default ReactComment;
