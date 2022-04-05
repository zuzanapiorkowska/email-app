import { Option } from "./Option";

interface QuestionProps {
  text: string;
  options: string[];
  selected: string;
  onClick(answear: string): void;
}

export function Question(props: QuestionProps) {
  return (
    <div className="question">
      <p>{props.text}</p>
      <div className="options">
        {props.options.map((option) => {
          return (
            <Option
              className={props.selected === option? "selected" : "option-button"}
              onClick={() => {
                props.onClick(option);
              }}
              option={option}
              key={option}
            />
          );
        })}
      </div>
    </div>
  );
}
