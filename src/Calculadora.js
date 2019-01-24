class Calculadora{

    constructor(){

    }

    calcular(operacao, v1, v2){
        switch(operacao){
            case '+':
                return this.sum(v1, v2);
            case '-':
                return this.sub(v1, v2);
            case 'x':
                return this.mult(v1, v2);
            case '/':
                return this.div(v1, v2);
            default:
                return 'Undefined';
        }
    }

    sum(v1, v2){
        return v1 + v2;
    }

    sub(v1, v2){
        return v1 - v2;
    }

    mult(v1, v2){
        return v1 * v2;
    }

    div(v1, v2){
        return v1 / v2;
    }

}

module.exports = calcular, sum, sub, mult, div;