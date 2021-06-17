let vlrItem;
let vlrPagar;
let qtndItemFormatado;
let codigo;
let qtndItem 
let vlrItemFormatado

do {
  codigo = prompt("Informe um número do menu \n" + "\n 1 Cachorro Quente R$ 4.00" + "\n 2 X-salada R$ 4.50" + "\n 3 X-bacon R$ 5.00" + "\n 4 Torrada Simples R$ 2.00" + "\n 5 Refrigerante R$ 1.50\n\n");
  if (codigo < 1 || codigo > 5){
    console.log("Opção inválida, tente novamente.\n");
  }
}while (codigo < 1 || codigo > 5);

switch (codigo) {
  case "1":
    vlrItem = 4.00
  break;

  case "2":
    vlrItem = 4.50
  break;

  case "3":
    vlrItem = 5.00
  break;

  case "4":
    vlrItem = 2.00
  break;

  case "5":
    vlrItem = 1.50
  break;
}

vlrItemFormatado = parseFloat(vlrItem);

do {
  qtndItem = prompt("\n Informe a quantidade \n\n");
  if (qtndItem < 1 || qtndItem == ""){
    console.log("Opção inválida, tente novamente.\n");
  }
}while (qtndItem < 1 || qtndItem == "");

qtndItemFormatado = parseFloat(qtndItem);

if (qtndItemFormatado > 1){
  vlrPagar = qtndItemFormatado * vlrItemFormatado
} else{
  vlrPagar = vlrItemFormatado
};

console.log("\n Total: R$", vlrPagar.toFixed(2));