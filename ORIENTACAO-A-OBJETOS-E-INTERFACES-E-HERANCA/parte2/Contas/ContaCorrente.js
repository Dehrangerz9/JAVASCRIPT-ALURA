import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numerodeContas
    constructor(cliente, agencia){
        super(0,cliente, agencia)
        ContaCorrente.numerodeContas += 1;
    }

    teste(){
        super.teste();
    }
    //sobreescrevendo o comportamento de sacar.
    sacar(valor) {
        let taxa = 1.1
        return this._sacar(valor, taxa)//pode usar o super tb
    }
}