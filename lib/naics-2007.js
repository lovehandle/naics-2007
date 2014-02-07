var data  = require('../data/data.json');
var index = require('../data/data-index.json');

function NAICS (data, index) {
  this._data = data || {};
  this._index = index || {};
}

NAICS.prototype = {

  search: function (keywords) {
    keywords = keywords || '';

    var items = [];
    var results = index[keywords] || {};

    for (code in results) {
      var score = results[code];
      var object = data[code];
      items.push(object);
    }

    return items;
  },

  find: function (code) { 
    return data[code];
  },

  above: function (code) {
    var results = [];
    var num = parseInt(code);

    for (var i = code.length; i > 0; i--) {
      code = code.substr(0, code.length-i);
      var result = data[code];
      if (result) results.push(result)
    }

    return results;
  },

  below: function (code) {
    var results = [];
    var num = parseInt(code);

    for (var i = 0; i < code.length; i++) {
      code = code.substr(0, code.length-i);
      var result = data[code];
      if (result) results.push(result)
    }

    return results;
  }


}

module.exports = new NAICS(data, index);
