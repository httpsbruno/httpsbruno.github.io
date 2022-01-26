const database = require('../database.json')

module.exports = (_ramal) => {
    const ramal = _ramal;
  
    if (ramal) {
      const employeesFiltered = database.filter(e => e.extension == ramal);
      if (!employeesFiltered[0]) {
        return [];
      } else {
        employeesFiltered.sort(
          (a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
        return employeesFiltered;
      };
    } else {
      return [];
    }
}
