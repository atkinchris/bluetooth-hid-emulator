const { PrimaryService } = require('bleno')
const HIDInformation = require('../characteristics/hidInformation')
const HIDControlPoint = require('../characteristics/hidControlPoint')
const Report = require('../characteristics/report')
const ProtocolMode = require('../characteristics/protocolMode')

const HID_SERVICE_UUID = '1812'

class HIDService extends PrimaryService {
  constructor() {
    super({
      uuid: HID_SERVICE_UUID,
      characteristics: [
        new ProtocolMode(),
        new Report(),
        // Report Map: 2A4B
        new HIDInformation(),
        new HIDControlPoint(),
      ],
    })
  }
}

module.exports = HIDService
