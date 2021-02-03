const assert = require('assert')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const sinon = require('sinon')
const app = require('../app')
const test_demo = require('../utils/test_demo')
chai.use(chaiHttp)

describe('product', () => {

  describe('/POST products/:productId/order', () => {
    it('it should CREATE a new order', async () => {
      sinon.stub(test_demo, 'test_demo')
        .onFirstCall()
        .returns(3)

      const res = await chai.request(app).get('/').send()
      
      expect(res).to.have.status(201)
      expect(res.body).to.be.a('object')
      expect(res.body).to.have.property("result")
      assert.equal(res.body.result, 3)
    })
  })

})
