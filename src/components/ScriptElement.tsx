import React, { ReactNode, useEffect, useRef } from 'react';

interface ScriptElementProps {
  children?: ReactNode;
  text: string;
}

const ScriptElement = ({ children, ...props }: ScriptElementProps) => {
  const el = useRef<HTMLScriptElement>();
  useEffect(() => {
    el.current.outerHTML = props.text;
  }, []);
  return (
    <script ref={el} />
  );
};

export default ScriptElement;
