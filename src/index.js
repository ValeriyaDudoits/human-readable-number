module.exports = function toReadable (number) {
    let word = [['z', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'], ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']];
    let answer = '';
    let str = number.toString().split('');
    let strLength = str.length;
    console.log(strLength);
    switch (strLength) {
        case 1:
            for (let i = 0; i < word[2].length; i++) {
                if (+str[0] === i) {
                    return word[2][i];
                }
            }
            break;
        case 2:
            if (+str[0] === 1) {
                for (let j = 0; j < word[1].length; j++) {
                    if (+str[1] === j) {
                        return word[1][j];
                    }
                }
            } else {
                for (let k = 2; k < word[0].length; k++) {
                    if (+str[0] === k) {
                        answer = word[0][k];
                    }
                }
                for (let m = 1; m < word[2].length; m++) {
                    if (+str[1] === m) {
                        answer += (' ' + word[2][m]);
                    }
                }
                return answer;
            }
        case 3:
            for (let n = 0; n < word[2].length; n++) {
                if (+str[0] === n) {
                    answer = (word[2][n] + ' hundred');
                }
            }
            for (let l = 1; l < word[0].length; l++) {
                if (+str[1] === 1) {
                    for (let j = 1; j < word[1].length; j++) {
                        if (+str[2] === j) {
                            answer += (' ' + word[1][j]);
                            return answer;
                        }
                    }
                }
                if (+str[1] === l) {
                    answer += (' ' + word[0][l]);
                }
            }
            for (let p = 1; p < word[2].length; p++) {
                if (+str[2] === p) {
                    answer += (' ' + word[2][p]);
                }
            }
            return answer;
    }
}
