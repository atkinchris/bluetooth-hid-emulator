const { Characteristic } = require('bleno')

const REPORT_CHARACTERISTIC_UUID = '2A4D'

class Report extends Characteristic {
  constructor() {
    super({
      uuid: REPORT_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([
        0x05, 0x01, // USAGE_PAGE (Generic Desktop)
        0x09, 0x06, // USAGE (Keyboard)
        0xA1, 0x01, // COLLECTION (Application)
        0x85, 0x00, // REPORT_ID
        0xC0, // END_COLLECTION
      ]),
    })
  }
}

module.exports = Report
