const { PrimaryService } = require('bleno')

const HID_SERVICE_UUID = '1812'

class HIDService extends PrimaryService {
  constructor() {
    super({
      uuid: HID_SERVICE_UUID,
    })
  }
}

module.exports = HIDService
