const database = require('../database.json')

const aniver = (_month) => {
    const month = _month;

    if (month) {
      const employeesFiltered = database.filter(
      e => e.birthDay.slice(5, 7) == month || e.birthDay.slice(5, 7) == '0' + month);
  
      if (!employeesFiltered[0]) {
        return [];
      } else {

          return employeesFiltered;
        }

    } else {
      return [];
    }
}


module.exports = aniver;
