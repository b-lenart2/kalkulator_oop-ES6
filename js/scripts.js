'use strict';

var arr = [];
class Cal {
    constructor(cont, result) {
        this.input = document.querySelectorAll('.' + cont + ' input[type=\'button\']');
        this.resultDisplay = document.querySelector('#' + result);
    }
    assign() {
            for (let i in this.input) {
                this.input[i].addEventListener('click', this.calculate.bind(this));
            }
    }
    
    calculate(e) {        
            if (e.target.value == "=") {
                this.showResult();
                return;
            }

            if (e.target.value == "C") {
                this.resultDisplay.value = "";
                arr = [];
                return;
            }

            arr.push(e.target.value);
            if(arr[arr.length-1] == "." && arr[arr.length-2] == ".") {
                arr.pop();
            }

            console.log(arr);
            this.resultDisplay.value = "";
            for (let j in arr) {
                this.resultDisplay.value += arr[j];
            }
    }
    
    showResult() {
        var res1 = eval(this.resultDisplay.value);
            arr = [res1];
            this.resultDisplay.value = arr[0];
    }
}


const calcES6 = new Cal('calc', 'res');
calcES6.assign();


