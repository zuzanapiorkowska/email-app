import "reflect-metadata";
import { Type } from "class-transformer";
import {
  IsString,
  IsInt,
  Min,
  Max,
  IsEmail,
  ValidateNested,
  IsArray,
  MinLength,
  ArrayNotEmpty,
} from "class-validator";

export class Answer {
  @IsString()
  @MinLength(1)
  answer!: string;

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
  @Type(() => Answer)
  @IsArray()
  @ArrayNotEmpty()
  answers!: Answer[];
}
