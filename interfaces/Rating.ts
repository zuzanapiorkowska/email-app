import { Questioner } from "./Questioner";

export interface IRating {
  email: string;
  listOfQuestioners?: Questioner[];
}
