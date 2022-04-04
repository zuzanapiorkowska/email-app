import { ChangeEvent} from "react";

interface InputProps {
  value: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      placeholder="Twój email..."
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  )
}
