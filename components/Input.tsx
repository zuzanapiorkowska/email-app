import { ChangeEvent} from "react";

interface InputProps {
  value: string;
  name: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      name={props.name}
      placeholder="Twój email..."
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  )
}
