import { countLetter } from './count_letter';
import { isEqual } from 'lodash';

export const isAnagram = (string1, string2) => {

    const string1letterCount = countLetter(string1.toLowerCase().replace(/ /g, ''));
    const string2letterCount = countLetter(string2.toLowerCase().replace(/ /g, ''));

    return isEqual(string1letterCount, string2letterCount);

};