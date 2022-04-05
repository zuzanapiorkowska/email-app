import { useState } from "react";

interface OptionProps {
  option: string;
  className: string;
  onClick(): void;
}

export function Option(props: OptionProps) {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.option}
    </button>
  );
}
