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

