import{Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;
console.log(cliente1)

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.depositar(1000)

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado)