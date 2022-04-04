
import axios from "axios";
import email from "../pages/api/email";
import nock from "nock";
import fs from "fs-extra";
import { object } from "yup";

// import { } from "./tapes/nock-recorder-output-not-valid.json"
import { resolve } from "path";
describe('Testing email validation', () => {
    describe("Testing not valid email", () => {
        it("should not validate email ", async () => {
            // const body = { email: "13zolw13@gmail.com" }
            // await nock.recorder.rec({ output_objects: true, dont_print: true });
            nock.disableNetConnect();
            nock.load(resolve(__dirname, "./tapes/", "nock-recorder-output-not-valid.json"));
            await axios.post("http://localhost:3000/api/email", { email: '' }).then((response) => { fail('should not pass') }).catch((err) => { expect(err.response.status).toBe(400) })
            nock.enableNetConnect();
            // fs.writeFileSync("./test/tapes/nock-recorder-output-not-valid.json", JSON.stringify(nock.recorder.play()));
        })

        it("should not validation wrong email email", async () => {


            await axios.post("http://localhost:3000/api/email", { email: 'dsadasda' }).then((response) => { fail('should not pass') }).catch((err) => { expect(err.response.status).toBe(400) })

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

