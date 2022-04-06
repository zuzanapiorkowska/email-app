import {
  IsString,
  IsInt,
  Min,
  Max,
  IsEmail,
  ValidateNested,
} from "class-validator";

export class Answer {
  @IsString()
  answer!: string[];

  @IsInt()
  @Min(1)
  @Max(5)
  choice!: number;
}

export class Request {
  @IsString()
  @IsEmail()
  email!: string;

  @ValidateNested({ each: true })
  answers!: Answer[];
}
