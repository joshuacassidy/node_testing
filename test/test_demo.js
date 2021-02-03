const test_demo = require('../utils/test_demo')
const assert = require('assert')

describe('test_demo', function () {
    describe('test_demo()', function () {
      it('it should work', function () {
        assert.equal(test_demo.test_demo(2, 2), 4)
      })
  
    })
  })