'use strict'

function isArray(object) {
  return object instanceof Array
}

function isObject(object) {
  return typeof object === 'object'
}

function isNull(object) {
  return object === null
}

/**
 * Clones the provided object.
 * @param {object} object
 * @returns {object}
 */
function clone(object) {
  let copy

  if (isNull(object) || !isObject(object)) {
    return object
  }

  if (isArray(object)) {
    const count = object.length
    copy = []

    for (let i = 0; i < count; i++) {
      copy[i] = clone(object[i])
    }

    return copy
  } else {
    copy = {}

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        if (!isObject(object[key])) {
          copy[key] = object[key]
        } else {
          copy[key] = clone(object[key])
        }
      }
    }
  }

  return copy
}

module.exports = clone
