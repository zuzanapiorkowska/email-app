interface AnswearProps {
  text: string;
}

export function Answear(props: AnswearProps) {
  return <p className={"validation mt-5 bg-green-600"}>{props.text}</p>;
}
