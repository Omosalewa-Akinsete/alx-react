const { fromJS } = require('immutable');

/**
 * Converts a JavaScript object into an Immutable.js Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} - The immutable Map created from the object.
 */
function getImmutableObject(object) {
    return fromJS(object);
}

module.exports = getImmutableObject;
