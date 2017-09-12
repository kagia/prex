/* eslint-env mocha */

const chai = require('chai')
const request = require('supertest')
const app = require('../src/app')

const expect = chai.expect

describe('route /', () => {
  let agent

  before(() => {
    agent = request.agent(app)
  })

  it('returns welcome', () => {
    return agent.get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).to.contain('welcome')
      })
  })
})
