// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, it } from 'vitest'
import { clone } from '../src/index.ts'

describe('🧪 clone tests 🧪', () => {
  describe('null', () => {
    it('should return null', () => {
      const result = clone(null)
      assert.isNull(result)
    })
  })

  describe('empty string', () => {
    it('should return an empty string', () => {
      const result = clone('')
      assert.isEmpty(result)
    })
  })

  describe('empty object', () => {
    it('should return the copied object', () => {
      const result = clone({})
      assert.isObject(result)
    })
  })

  describe('array', () => {
    it('should return the modified array', () => {
      const firstArray = [1, 2, 3]
      const secondArray = clone(firstArray)

      secondArray[0] = 5

      assert.deepEqual(secondArray, [5, 2, 3])
    })
  })

  describe('array of objects', () => {
    it('should return the modified array of objects', () => {
      const firstArray = [
        {
          id: '103',
          name: 'Peter'
        },
        {
          id: '214',
          name: 'Eve'
        }
      ]
      const secondArray = clone(firstArray)

      secondArray[0].name = 'John'

      assert.deepEqual(secondArray, [
        {
          id: '103',
          name: 'John'
        },
        {
          id: '214',
          name: 'Eve'
        }
      ])
    })
  })

  describe('nested object', () => {
    it('should return the modified object', () => {
      const firstStudent = {
        id: 103,
        name: 'Ben',
        classes: ['Maths', 'Science', 'English language']
      }

      const secondStudent = clone(firstStudent)

      // @ts-ignore
      secondStudent.classes[0] = 'Psychology'

      assert.deepEqual(secondStudent, {
        id: 103,
        name: 'Ben',
        classes: ['Psychology', 'Science', 'English language']
      })
    })
  })

  describe('nested objects', () => {
    it('should return the modified nested objects', () => {
      const firstStudent = {
        id: 103,
        name: 'Ben',
        subjects: {
          groupDke: {
            science: 'B',
            maths: 'C'
          },
          groupOpe: {
            foo: 'bar'
          }
        }
      }

      const secondStudent = clone(firstStudent)

      // @ts-ignore
      secondStudent.subjects.groupDke.maths = 'B'

      assert.deepEqual(secondStudent, {
        id: 103,
        name: 'Ben',
        subjects: {
          groupDke: {
            science: 'B',
            maths: 'B'
          },
          groupOpe: {
            foo: 'bar'
          }
        }
      })
    })
  })
})
