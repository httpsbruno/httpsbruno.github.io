//const database = require('../database.json')
const fs = require('fs');

module.exports = (_json) => {
    const mydatabase = readDatabase();
    fs.writeFileSync('database.json', JSON.stringify([...mydatabase,_json]));
    //console.log(meujson);
}


function readDatabase(){
    const data = fs.readFileSync('database.json');
    return JSON.parse(data);
}