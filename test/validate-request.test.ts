import { validate } from "class-validator";
import { Answer, Request } from "../dto/Request.dto";

function generateRequest(overrides: { email?: any; answers?: any }) {
  const request = new Request();
  request.email =
    overrides.email === undefined ? "mihau@gmail.com" : overrides.email;
  request.answers = overrides.answers === undefined ? [] : overrides.answers;

  return request;
}

// test('passes with correct request', async () => {
//   const request = generateRequest({});
//   expect(await validate(request)).toEqual([])

test("passes with correct request", async () => {
  const request = generateRequest({});
  expect(await validate(request)).toEqual([]);
});

test("fails without email", async () => {
  const request = generateRequest({ email: null });
  expect(await validate(request)).toMatchSnapshot();
  //jak odpalimy za pierwszym razem, to generuje snapshot, za każdym następnym sprawdza czy jest zgodny ze snapshotem, a jak się nie zgadza, to mówi coś typu "ej brakuje tutaj takiej i takiej linijki)"
  //można odpalić z flagą --u, to wtedy update'uje snapshoty
  //jest też toMatchInlineSnapshot(), ale to się czasem wywala :d wtedy wrzuca pod testem ten snapshot
});

test("fails with incorrect email", async () => {
  const request = generateRequest({ email: "mihaugmail.com" });
  expect(await validate(request)).toMatchSnapshot();
});

test("fails with empty answers", async () => {
  const request = generateRequest({ answers: null });
  expect(await validate(request)).toEqual([
    //moglibyśmy spróbować w tym arrayu cały ten obiekt, co chcemy, ale możemy sobie wybrać tylko niektóre pola, np. "{constrains: {isEmail: "email must be an email", isString: "email must be a string"}, property {email}}"
    // może być też partial matcher, np. array, w którym pierwszy ma być obiektem, który zawiera takie pola jak... wtedy będzie
    expect.objectContaining({
      constraints: {
        isEmail: "email must be an email",
        isString: "email must be a string",
      },
      property: "email",
    }),
  ]);
});

test("fails with incorrect answer", async () => {
  const request = generateRequest({ answers: [new Answer()] });
  expect(await validate(request)).toMatchSnapshot();
});
