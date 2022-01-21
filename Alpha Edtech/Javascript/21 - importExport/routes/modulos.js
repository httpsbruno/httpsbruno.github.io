const express = require('express');
const router = express.Router();
const employees = require('../database/employees.json');

/* b. Crie um módulo capaz de retornar os aniversariantes do mês, 
recebendo um número de 1 a 12 e o exporte para usar em uma rota GET.*/ 
router.get('/aniversarios/', (req, res) => {
    const month = req.query.month;
  
    if (month) {
      const employeesFiltered = employees.filter(
e => e.dataNascimento.slice(3, 5) == month || e.dataNascimento.slice(3, 5) == '0' + month);
  
      if (!employeesFiltered[0]) {
        res.send('Nenhum funcionario encontrado');
      } else {
        res.send(employeesFiltered);
      };
  
    } else {
      res.send('Requisição sem parametro');
    }
  });

/*c. Crie um módulo capaz de retornar a lista de funcionários de um 
    determinado setor e o exporte para usar em uma rota GET.*/ 
router.get('/setor/', (req, res) => {
    const sector = req.query.sector;
  
    if (sector) {
      const employeesFiltered = employees.filter(e => e.setor.toLowerCase().includes(sector.toLowerCase()));
  
      if (!employeesFiltered[0]) {
        res.send('Nenhum funcionario encontrado');
      } else {
        res.send(employeesFiltered);
      };
    } else {
      res.send('Requisição sem parametro');
    }
  });

/*d. Crie um módulo capaz de retornar uma lista de ramais ordenado 
alfabeticamente e o exporte para usar em uma rota GET.*/
router.get('/ramal/', (req, res) => {
    const ramal = req.query.ramal;
  
    if (ramal) {
      const employeesFiltered = employees.filter(e => e.ramal == ramal);
      if (!employeesFiltered[0]) {
        res.send('Nenhum funcionario encontrado');
      } else {
        employeesFiltered.sort(
          (a, b) => a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
        );
        res.send(employeesFiltered);
      };
    } else {
      res.send('Requisição sem parametro');
    }
  });

  module.exports = router;