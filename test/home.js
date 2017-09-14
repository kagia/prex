/* eslint-env mocha */

import chai from 'chai'
import request from 'supertest'
import app from '../src/app'

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
