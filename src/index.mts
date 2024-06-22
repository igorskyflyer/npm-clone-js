// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * @param {any} object
 */
function isObject(object: any) {
	return typeof object === 'object'
}

/**
 * @param {any} object
 */
function isNull(object: any) {
	return object === null
}

/**
 * Clones the provided object.
 * @param {any} object
 */
export function clone(object: any): object {
	let copy: any

	if (isNull(object) || !isObject(object)) {
		return object
	}

	if (Array.isArray(object)) {
		const count = object.length
		copy = []

		for (let i = 0; i < count; i++) {
			copy[i] = clone(object[i])
		}

		return copy
	}

	copy = {}

	for (const key in object) {
		if (Object.hasOwn(object, key)) {
			if (!isObject(object[key])) {
				copy[key] = object[key]
			} else {
				copy[key] = clone(object[key])
			}
		}
	}

	return copy
}
