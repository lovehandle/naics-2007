var _ = require('underscore');

var DEFAULT_OPTIONS = {
  properties: [],
  objects: {},
  tokenizer: function (str) {
    return str;
  }
}

function build (options) {
  options = options || {};
  options = _.defaults(options, DEFAULT_OPTIONS);

  var tokenize = options['tokenize'];
  var objects = options['objects'];
  var properties = options['properties'];

  var index = {};

  _.each(objects, function (obj, id) {
    _.each(properties, function (property, i) {
      if ( _(obj).has(property) ) {
        var weight = properties.length - i; 
        var value  = obj[property];
        var tokens = tokenize(value);
        _.each(tokens, function (token) {
          index[token] = index[token] || {};
          index[token][id] = index[token][id] || 0;
          index[token][id] += weight;
        });
      }
    });
  });

  return index;
}

module.exports = build;
