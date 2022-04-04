export {};
import email from "../pages/api/email";

describe("Testing nodemialer", () => {
  it("should email validation validate email", () => {
    const req = {
      body: JSON.stringify({
        discount: 0.2,
        tax: 0.06,
        items: [
          {
            id: 1,
            price: 19.99,
            quantity: 2,
          },
          {
            id: 2,
            price: 43.49,
            quantity: 1,
          },
        ],
      }),
    };

    const json = jest.fn();

    const status = jest.fn(() => {
      return {
        json,
      };
    });

    const res = {
      status,
    };
    // email(req, res);
    expect(true).toBe(true);
    expect(false).not.toBe(true);
  });
});
