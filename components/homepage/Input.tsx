import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  name: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      name={props.name}
      placeholder="Twój email..."
      className={
        "input h-10 w-60 rounded-md mr-5 pl-2 bg-violet-700 text-white placeholder:text-white drop-shadow-md placeholder:opacity-75"
      }
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}
