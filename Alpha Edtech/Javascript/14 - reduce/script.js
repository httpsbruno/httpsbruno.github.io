const MORA = 2;
const JUROS_DIA = 0.1;
const TEMPO_DIA = 24 * 60 * 60 * 1000;
const DATA_HOJE = new Date();

let dias_atraso;
let compras = [];

//Inserindo nova compra
function inserirCompra() {
     //adiciona compra
     compras.push({
          nome: document.getElementById("nome").value,
          data: new Date(document.getElementById("data").value),
          valor: parseFloat(document.getElementById("valor").value, 10),
          juros: 0
     });
  
     //Limpando
     document.getElementById("nome").value = "";
     document.getElementById("data").value = "";
     document.getElementById("valor").value = "";

     insereTabela();
}

//Caulculando Juros das compras
function calcularJuros(){

     compras = compras.map((comprasItem) => {
          return {
            ...comprasItem,
            juros: getJurosCompra(comprasItem.data)
          }
     });

     insereTabela();
}
function getJurosCompra(comprasItem) {
     const DATA_HOJE = new Date();
     if(DATA_HOJE.getTime() > comprasItem.getTime()) {
          dias_atraso = Math.trunc((DATA_HOJE.getTime() - comprasItem.getTime())/TEMPO_DIA);
          return MORA + dias_atraso * JUROS_DIA;
     } else {
          dias_atraso = 0;
          return 0;
     }
}


//Alterando dados na tabela
function insereTabela() {
     limparTabela();
     let tabela = document.querySelector('table');
     compras.forEach((comprasItem) => {
       tabela.append(adicionaLinha(comprasItem))
     })
   }

function limparTabela() {
  const tabela = document.querySelector('table');
  tabela.innerHTML = '';

  const row = document.createElement('tr');

  const colnome = document.createElement('th');
  colnome.innerHTML = 'Cliente';
  const coldata = document.createElement('th');
  coldata.innerHTML = 'Vencimento';
  const colvalor = document.createElement('th');
  colvalor.innerHTML = 'Compra';
  const colJurosPorcentagem = document.createElement('th');
  colJurosPorcentagem.innerHTML = 'Juros (%)';
  const colJurosReais = document.createElement('th');
  colJurosReais.innerHTML = 'Juros (R$)';
  const colValorTotal = document.createElement('th');
  colValorTotal.innerHTML = 'Total';

  row.append(colnome);
  row.append(coldata);
  row.append(colvalor);
  row.append(colJurosPorcentagem);
  row.append(colJurosReais);
  row.append(colValorTotal);


  tabela.append(row);
}

function adicionaLinha(comprasItem) {
  const row = document.createElement('tr');

  const colnome = document.createElement('td');
  colnome.innerHTML = comprasItem.nome;
  const coldata = document.createElement('td');
  coldata.innerHTML = dataDiaMesAno(comprasItem.data);
  const colvalor = document.createElement('td');
  colvalor.innerHTML = valorEmReais(comprasItem.valor);
  const colJurosPorcentagem = document.createElement('td');
  colJurosPorcentagem.innerHTML = `${comprasItem.juros} %`
  const colJurosReais = document.createElement('td');
  colJurosReais.innerHTML = valorEmReais(comprasItem.valor * comprasItem.juros/100);
  const colValorTotal = document.createElement('td');
  colValorTotal.innerHTML = valorEmReais(comprasItem.valor + (comprasItem.valor * comprasItem.juros/100));

  row.append(colnome);
  row.append(coldata);
  row.append(colvalor);
  row.append(colJurosPorcentagem);
  row.append(colJurosReais);
  row.append(colValorTotal);

  return row;
}



//Funções de formatação
function valorEmReais(valor) {
     return valor.toLocaleString('pt-br', {
       style: 'currency',
       currency: 'BRL',
     });
}
   
function dataDiaMesAno(date) {
     const data = new Date(date)
     return ((('' + data.getDate()).length === 1 ? '0' : '') + data.getDate()) + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}



//Novas funcionaliddes

console.log = function(message) {
     document.getElementById('teste').innerHTML = message;
}

async function organizarData(){
   let groupData = agruparPor(compras, 'data');

   document.getElementById('teste').innerHTML = JSON.stringify(groupData);

   // console.log(groupData);
     
}




async function organizarNome(){
     let groupNome = agruparPor(compras, 'nome');
     //console.log(groupNome);
     document.getElementById('teste').innerHTML = JSON.stringify(groupNome);
     //  desenhandoAgrupamento(groupNome);
}

function agruparPor(objetoArray, propriedade) {
     return objetoArray.reduce(function (acc, obj) {
       let key = obj[propriedade];
       if (!acc[key]) {
         acc[key] = [];
       }
       acc[key].push(obj);
       return acc;
     }, {});
   }


