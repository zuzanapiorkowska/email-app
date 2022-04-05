import axios from "axios";

describe("Validating reviews", () => {
  describe("Test  with correct values", () => {
    it("should return values from form", async () => {
      const response = await axios.get(
        "http://localhost:3000/api/rating?email=xyz@gmail.com&rating=5"
      );
      expect(response.data.statusCode).toBe(200);
      expect(response.data.message).toBe("Thank you for your feedback!");
    });
  });
  describe("Invalid values in review", () => {
    it("should throw an error  wrong out of scale", async () => {
      await axios
        .get("http://localhost:3000/api/rating?email=xy@gmail.com&rating=6")
        .then((response) => {
          fail("should not pass");
        })
        .catch((err) => {
          expect(err.response.status).toBe(400);
        });
    });

    it("should throw an error rating wrong email out of scale", async () => {
      await axios
        .get("http://localhost:3000/api/rating?email=xy&rating=5")
        .then((response) => {
          fail("should not pass");
        })
        .catch((err) => {
          expect(err.response.status).toBe(400);
        });
    });
  });
});
