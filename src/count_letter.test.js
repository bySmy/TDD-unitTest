import { expect } from 'chai';
import { countLetter } from './letter-count';

describe('countLetter - basic fuctionality', () => {
    it('returns an empty object when passed an empty string', () => {
        const expected = {};
        const actual = countLetter('');
        expect(actual).to.deep.equal(expected);
    })
    it('return the correct letter count for a word with only one of each letter', () => {
        const expected = { h: 1, o: 1, u: 1, s: 1, e: 1 };
        const actual = countLetter('house');
        expect(actual).to.deep.equal(expected);

    })
    it('return the correct letter count for words with more than one letter', () => {
        const expected = { m: 1, i: 4, s: 4, p: 2 };
        const actual = countLetter('mississippi');
        expect(actual).to.deep.equal(expected);

    })
})