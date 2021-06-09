// 'house' -> { h:1, o:1, u:1, s:1, e:1 }
// 'letter' -> { l:1, e:2, t:2, r:1 }

export const countLetter = string => {
    const letters = string.split('');
    let letterCount = {};
    letters.forEach(letter => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1;
        } else {
            letterCount[letter] += 1
        }
    });
    return letterCount;
};