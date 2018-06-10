const { PrimaryService } = require('bleno')

const HIDInformation = require('../characteristics/hidInformation')
const HIDControlPoint = require('../characteristics/hidControlPoint')
const ReportMap = require('../characteristics/reportMap')
const ProtocolMode = require('../characteristics/protocolMode')
const { to128Bit } = require('../utils/uuid')

const HID_SERVICE_UUID = to128Bit('1812')

class HIDService extends PrimaryService {
  constructor() {
    super({
      uuid: HID_SERVICE_UUID,
      characteristics: [
        new ProtocolMode(),
        // Report: 2A4D
        new ReportMap(),
        new HIDInformation(),
        new HIDControlPoint(),
      ],
    })
  }
}

module.exports = HIDService
