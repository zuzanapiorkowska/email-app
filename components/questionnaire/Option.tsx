import { useState } from "react";

interface OptionProps {
  answear: number;
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
      {props.answear}
    </button>
  );
}
