interface ButtonProps {
 onClick(): void;
}

export function Button(props: ButtonProps) {
  return (
    <button onClick={()=>props.onClick()}>Wyślij</button>
  )
}
