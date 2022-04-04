interface OptionProps {
text: number;
}

export function Option(props: OptionProps) {
    return <button>{props.text}</button>
}