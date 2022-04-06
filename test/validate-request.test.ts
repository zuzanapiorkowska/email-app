import { validate } from "class-validator";
import { Answer, Request } from "../dto/Request.dto";

function generateRequest(overrides: { email?: any; answers?: any }) {
  const request = new Request();
  request.email =
    overrides.email === undefined ? "mihau@gmail.com" : overrides.email;
  request.answers = overrides.answers === undefined ? [] : overrides.answers;

  return request;
}

describe("validate request", () => {
  test("passes with correct request", async () => {
    const request = generateRequest({});
    expect(await validate(request)).toMatchSnapshot;
  });

  test("fails without email", async () => {
    const request = generateRequest({ email: null });
    expect(await validate(request)).toMatchSnapshot();
  });

  test("fails with incorrect email", async () => {
    const request = generateRequest({ email: "mihaugmail.com" });
    expect(await validate(request)).toMatchSnapshot();
  });

  test("fails with empty answers", async () => {
    const request = generateRequest({ answers: null });
    expect(await validate(request)).toEqual([
      expect.objectContaining({
        children: [
          expect.objectContaining({
            constraints: {
              nestedValidation:
                "each value in nested property answers must be either object or array",
            },
            property: "answers",
          }),
        ],
      }),
    ]);
  });

  test("fails with incorrect answer", async () => {
    const request = generateRequest({ answers: [new Answer()] });
    expect(await validate(request)).toMatchSnapshot();
  });
});
