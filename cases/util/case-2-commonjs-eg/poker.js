module.exports = class Poker {

    constructor(color, number) {

        this._color = color;            // ♠, ♥, ♣, ♦                               ( 1 ~ 4 )
        this._number = number;          // A, 1,2,3 ... 8,9,10 J,Q,K joker JOKER    ( 1 ~ 15 )

        this.finalPoker = this.finalPoker(this._color, this._number);
    }

    finalPoker(color, number) {

        if (number < 14) {

            return this.finalColor(color) + this.finalNumber(number);

        } else {

            return this.finalNumber(number);
        }
    }

    finalColor(color) {

        if (color === 1) {

            return '♠';

        } else if (color === 2) {

            return '♥';

        } else if (color === 3) {

            return '♣';

        } else if (color === 4) {

            return '♦';
        }
    }

    finalNumber(number) {

        if (number === 1) {

            return 'A';

        } else if (number >= 2 && number <= 10) {

            return number + '';

        } else if (number === 11) {

            return 'J';

        } else if (number === 12) {

            return 'Q';

        } else if (number === 13) {

            return 'K';

        } else if (number === 14) {

            return 'joker';

        } else if (number === 15) {

            return 'JOKER';
        }
    }

    set color(colorNum) {

        if (colorNum < 0) {

            colorNum = 1;

        } else if (colorNum > 4) {

            colorNum = 4;
        }

        this._color = colorNum;
    }

    get color() {

        return this._color;
    }

    set number(numberData) {

        if (numberData < 0) {

            numberData = 0;

        } else if (numberData > 15) {

            numberData = 15;
        }

        this._number = numberData;
    }

    get number() {

        return this._number;
    }
};
