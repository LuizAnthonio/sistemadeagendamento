const Datastore = require('nedb');
const path = require('path');
const util = require('util');


if (typeof util.isDate !== 'function') {
  util.isDate = (obj) => Object.prototype.toString.call(obj) === '[object Date]';
}

const db = new Datastore({ 
    filename: path.join(__dirname, '../../data/appointments.db'), 
    autoload: true 
});

module.exports = db;