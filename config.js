const path = require('path')
const convict = require('convict')
convict.addFormats(require('convict-format-with-moment'))
convict.addFormats(require('convict-format-with-validator'))

const config = convict({
  foobar: {
    doc: 'the foo bar',
    default: {value:[]},
    format: Object,
    env: 'FOOBAR',
  }
}).validate()

module.exports = config
