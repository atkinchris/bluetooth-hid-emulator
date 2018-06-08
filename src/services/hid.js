const { PrimaryService } = require('bleno')
const HIDInformation = require('../characteristics/hidInformation')

const HID_SERVICE_UUID = '1812'

class HIDService extends PrimaryService {
  constructor() {
    super({
      uuid: HID_SERVICE_UUID,
      characteristics: [
        // Report: 2A4D
        // Report Map: 2A4B
        // Boot Keyboard Input Report: 2A22
        // Boot Keyboard Output Report: 2A32
        new HIDInformation(),
        // HID Control Point: 2A4C
      ],
    })
  }
}

module.exports = HIDService
