import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Yo my andrew id exits."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Sweetsuro"
          ));
    });

    test('should return add', () => {
        const query = "What is 12 plus 22?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "3q4"
          ));
    });

    test('should return largest', () => {
        const query = "Which of the following numbers is the largest: 38, 84, 73?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "84"
          ));
    });
});