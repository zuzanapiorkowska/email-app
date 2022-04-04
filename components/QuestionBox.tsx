import { Button } from "./Button"
import { Option } from "./Option"
import { Question } from "./Question";

interface QuestionBoxProps {

}

export function QuestionBox(props: QuestionBoxProps) {
const questions = ["co tam?", "fajnie?", "na pewno?"];
const answears = [1, 2, 3, 4, 5];

    return <div>
        {questions.forEach(question => {
            return (
                <Question text={question}/>
                {answears.forEach(answear=> {return <Option text={answear} />})}
            )
        })} 

    </div>
}