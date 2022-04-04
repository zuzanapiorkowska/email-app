
import axios from "axios";
import email from "../pages/api/email";
import nock from "nock";
import fs from "fs-extra";
import { object } from "yup";

// import { } from "./tapes/nock-recorder-output-not-valid.json"
import { resolve } from "path";
describe('Testing email validation', () => {
    beforeEach(() => {
        nock.cleanAll()
        nock.disableNetConnect();
    })
    afterEach(() => {
        nock.cleanAll()
        nock.enableNetConnect();
    })
    describe("Testing not valid email", () => {
        it("should not validate email ", async () => {
            // await nock.recorder.rec({ output_objects: true, dont_print: true });
            // nock.disableNetConnect();
            nock.load(resolve(__dirname, "./__tapes__/", "notValidEmail.json"));
            await axios.post("http://localhost:3000/api/email", { email: '' }).then((response) => { fail('should not pass') }).catch((err) => { expect(err.response.status).toBe(400) })
            // nock.enableNetConnect();
            // fs.writeFileSync("./test/tapes/notValidEmail.json", JSON.stringify(nock.recorder.play()));
        })

        it("should not validation wrong email email", async () => {

            //  await nock.recorder.rec({ output_objects: true, dont_print: true });
            nock.load(resolve(__dirname, "./__tapes__/", "notValidEmail2.json"));

            await axios.post("http://localhost:3000/api/email", { email: 'dsadasda' }).then((response) => { fail('should not pass') }).catch((err) => { expect(err.response.status).toBe(400) })
            // fs.writeFileSync("./test/tapes/notValidEmail2.json", JSON.stringify(nock.recorder.play()));

        })

    });


    describe("Testing nodemailer valid email", () => {
        it("should validate email ", async () => {
            nock.load(resolve(__dirname, "./__tapes__/", "ValidEmail.json"));

            // await nock.recorder.rec({ output_objects: true, dont_print: true });

            const response = await axios.post("http://localhost:3000/api/email", { email: 'valid@gmail.com' });
            console.log(response.data);
            expect(response.data.statusCode).toBe(200);
            nock.load(resolve(__dirname, "./__tapes__/", "ValidEmail.json"));
            // fs.writeFileSync("./test/__tapes__/ValidEmail.json", JSON.stringify(nock.recorder.play()));

        });


    })
});

