interface QuestionProps {
    text: string;
}

export function Question(props: QuestionProps) {
    return <p>{props.text}</p>
}