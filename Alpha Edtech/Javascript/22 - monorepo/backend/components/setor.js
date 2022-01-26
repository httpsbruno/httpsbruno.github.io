const database = require('../database.json')

const setor = (_sector) => {
  const sector = _sector;
  
  if (sector) {
    const employeesFiltered = database.filter(e => e.sector.toLowerCase().includes(sector.toLowerCase()));

    if (!employeesFiltered[0]) {
      return [];
    } else {
      return employeesFiltered;
    };
  } else {
    return [];
  }
}

module.exports = setor;