import { RequestQuestionnaire } from '../interfaces/QuestionWithAnswear';
import { validate } from 'class-validator';

describe('Testing email validation', () => {
    it('should return true', async () => {

        const answer = new RequestQuestionnaire({ questionnaireId: 1, questionsWithAnswers: [{ questionId: 1, answer: 1 }], email: { email: '13zolw13@gmail.com' } });
        expect(await validate(answer.email).then(errors => errors.length)).toBe(0);
    })
});