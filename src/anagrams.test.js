import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
    // 'listen' -> 'silent'  true
    it('returns true when two known anagrams are passed in', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.equal(expected);
    })

    // 'elbows' -> ''below' false
    it('returns false when either of the strings has extra letters', () => {
        const expected = false;
        const actual = isAnagram('elbows', 'below');
        expect(actual).to.equal(expected);

        const actual2 = isAnagram('below', 'elbows');
        expect(actual).to.equal(expected);
    })

    // 'listens' -> 'silent'  false
    it('returns false when the strings have the same letters in different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    })

    // 'STATE' -> 'taste'  true
    it('returns true when two known anagrams are passed in without case-sensetive', () => {
        const expected = true;
        const actual = isAnagram('STATE', 'state');
        expect(actual).to.equal(expected);
    })

    // 'conversation' -> 'voices rant on' true
    it('returns true when two known anagrams are passed in by ignoring empty space', () => {
        const expected = true;
        const actual = isAnagram('conversation', 'voices rant on');
        expect(actual).to.equal(expected);
    })

});