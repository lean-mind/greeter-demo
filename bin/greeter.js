#!/usr/bin/env node
const { greet } = require('../lib/greeter')

const [nodePath, modulePath, name] = process.argv

if (!name) {
  console.error('I can\'t greet you if I don\'t know your name. Pass your name.')
} else {
  console.log(greet(name))
}
