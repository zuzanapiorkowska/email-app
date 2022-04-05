import {IsEmail, IsString, validate} from "class-validator";

class Answer {
}

class Request {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString({ each: true })
  answers!: string[];
}

function generateRequest(overrides: { email?: any, answers?: any }) {
  const request = new Request();
  request.email = overrides.email === undefined ? 'mihau@gmail.com' : overrides.email
  request.answers = overrides.answers === undefined ? [] : overrides.answers

  return request
}

test('passes with correct request', async () => {
  const request = generateRequest({});
  expect(await validate(request)).toEqual([])
})

test('fails without email', async () => {
  const request = generateRequest({ email: null });
  expect(await validate(request)).toMatchSnapshot()
})

test('fails with incorrect email', async () => {
  const request = generateRequest({ email: 'mihaugmail.com' });
  expect(await validate(request)).toMatchSnapshot()
})

test('fails with empty answers', async () => {
  const request = generateRequest({ answers: null });
  expect(await validate(request)).toMatchSnapshot()
})



// import axios from "axios";
// import { Answer } from "./Answer";
// import { QuestionsWithAnswers, QuestionWithAnswer, IQuestionnaire, Api,  } from "./QuestionWithAnswear";

// export class Request implements Api {
//     constructor(
//       private questionnaireId: number,
//       private questionsWithAnswers: QuestionWithAnswer[],
//       private email: string
//     ) {}
//     async submit(
//       questionsWithAnswears: QuestionsWithAnswers
//     ): Promise<Answer> {
//       const url = "http://localhost:3000/???";
//       const dataToSend = {
//         questionnaireId: this.questionnaireId,
//         questionsWithAnswears: this.questionsWithAnswers,
//         email: this.email,
//       };
//       try {
//         const response = await axios.post(url, {
//           questionsWithAnswears: { dataToSend },
//         });
//         const ConfirmationResponse: Answer = response.data;
//         return ConfirmationResponse;
//       } catch (err: any) {
//         throw new Error(
//           err.message + " Cannot connect to http://localhost:3000/???"
//         );
//       }
//     }
//     async getQuestionnaire(): Promise<IQuestionnaire> {
//       const url = "http://localhost:3000/???";
//       const questionnaireId = this.questionnaireId;
//       try {
//         const response = await axios.post(url, { id: questionnaireId});
//         const Response: IQuestionnaire = response.data;
//         return Response;
//       } catch (err: any) {
//         throw new Error(
//           err.message + " Cannot connect to http://localhost:3000/???"
//         );
//       }
//     }

//     validate(): void {
//         if (!isEmailValid(this.email)) throw new Error("Invalid e-mail");
//         return;
//     }
//   }
  
//   function isEmailValid(email: string) {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };
