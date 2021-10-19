const { greet } = require('../lib/greeter')

describe('greet should', () => {
  it('greet by given name', () => {
    const greeting = greet('Don Pepito')
    expect(greeting).toBe('Hello Don Pepito!!')
  })
})
