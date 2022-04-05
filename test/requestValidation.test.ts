import { Request } from "./Request.test";

describe("Questionnaire request", () => {
  it.only("should throw Invalid Email Input", () => {
    const request = new Request(
      1,
      [{ questionId: 1, answer: "1" }],
      "toniejestemail"
    );
    expect(() => request.validate()).toThrow("Invalid e-mail");
  });
});

//notatki: abstrakcje, formik, walidacja Michała

    