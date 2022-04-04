import { useEffect, useState } from "react";
import { Answear } from "../../interfaces/Answear";
import { Option } from "./Option";

interface QuestionProps {
  text: string;
  hint: string;
  answears: Answear[];
  selected: number;
  onClick(answear: number): void;
}

export function Question(props: QuestionProps) {
  return (
    <div className="question">
      <p>{props.text}</p>
      <p className="hint">{props.hint}</p>
      <div className="options">
        {props.answears.map((a) => {
          return (
            <Option
              className={props.selected === a.rating? "selected" : "option-button"}
              onClick={() => {
                props.onClick(a.rating);
              }}
              answear={a.rating}
              key={a.key}
            />
          );
        })}
      </div>
    </div>
  );
}
