const { PrimaryService } = require('bleno')
const Echo = require('../characteristics/echo')

const ECHO_SERVICE_UUID = 'EC00'

class EchoService extends PrimaryService {
  constructor() {
    super({
      uuid: ECHO_SERVICE_UUID,
      characteristics: [
        new Echo(),
      ],
    })
  }
}

module.exports = EchoService
