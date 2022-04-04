interface AnswerProps {
    text: string
}

export function Answer(props: AnswerProps) {
    return <p>{props.text}</p>
}