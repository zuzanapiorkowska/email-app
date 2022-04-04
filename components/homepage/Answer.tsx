interface AnswerProps {
  text: string;
}

export function Answer(props: AnswerProps) {
  return <p className={"mt-5 bg-green-600"}>{props.text}</p>;
}
