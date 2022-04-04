
import axios from "axios";
import email from "../pages/api/email";


describe('Testing email validation', () => {
    describe("Testing not valid email", () => {
        it("should not validate email ", async () => {
            // const body = { email: "13zolw13@gmail.com" }

            await axios.post("http://localhost:3000/api/email", { email: '' } ).then((response) => { fail('should not pass') }).catch((err) => { expect(err.response.status).toBe(400) })

        })

        it("should not validation wrong email email", async () => {


            await axios.post("http://localhost:3000/api/email",  { email: 'dsadasda' } ).then((response) => { fail('should not pass') }).catch((err) => { expect(err.response.status).toBe(400) })

        })

    });


    describe("Testing nodemialer valid email", () => {
        it("should validate email ", async () => {

            const response = await axios.post("http://localhost:3000/api/email", { email: 'valid@gmail.com' });
            console.log(response.data);
            expect(response.data.statusCode).toBe(200);

        });


    })
});

