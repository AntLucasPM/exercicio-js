/* Ex01
let produtos = ["Mouse","teclado","Cpu"];
console.log (produtos[1]);

produtos[2] = "Notebook";
console.log (produtos[2]);//
*/

/* Ex02
let clientes = ["Lucas", "Antonio", "Marcos"];
console.log (clientes);

clientes[clientes.length]="Neymar";
console.log (clientes);

clientes.length = clientes.length - 1;
console.log (clientes);
*/

/* Ex03
let produto = {
    nome: "celular",
    preco: 1000,
    quantidade: 10,
};

produto.preco = 800;
console.log(produto);
*/

/* Ex04
let venda = {
    produto: "celular",
    preco: 1000,

};

venda.data = "01/01/2024";
delete venda.produto

console.log(venda);
*/

/* Ex05*/
let estoque = ["Mouse","teclado","Cpu"];
let novoEstoque = [...estoque];
novoEstoque[1] = "Monitor";

console.log(estoque);
console.log(novoEstoque);

let funcionario = {
    nome: "Lucas",
    idade: 30,
};

let novoFuncionario = {...funcionario};
novoFuncionario.nome = "Antonio";

console.log(funcionario);
console.log(novoFuncionario);