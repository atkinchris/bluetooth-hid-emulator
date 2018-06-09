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
        0x75, 0x01, // REPORT_SIZE (1)
        0x95, 0x08, // REPORT_COUNT (8)
        0x05, 0x07, // USAGE_PAGE (Keyboard)(Key Codes)
        0x19, 0xE0, // USAGE_MINIMUM (Keyboard LeftControl)(224)
        0x29, 0xE7, // USAGE_MAXIMUM (Keyboard Right GUI)(231)
        0x15, 0x00, // LOGICAL_MINIMUM (0)
        0x25, 0x01, // LOGICAL_MAXIMUM (1)
        0x81, 0x02, // INPUT (Data,Var,Abs): Modifier byte
        0x95, 0x01, // REPORT_COUNT (1)
        0x75, 0x08, // REPORT_SIZE (8)
        0x81, 0x03, // INPUT (Cnst,Var,Abs): Reserved byte
        0x95, 0x05, // REPORT_COUNT (5)
        0x75, 0x08, // REPORT_SIZE (8)
        0x15, 0x00, // LOGICAL_MINIMUM (0)
        0x26, 0xA4, 0x00, // LOGICAL_MAXIMUM (164)
        0x05, 0x07, // USAGE_PAGE (Keyboard)(Key Codes)
        0x19, 0x00, // USAGE_MINIMUM (Reserved (no event indicated))(0)
        0x2A, 0xA4, 0x00, // USAGE_MAXIMUM (Keyboard Application)(164)
        0x81, 0x00, // INPUT (Data,Ary,Abs)
        0xC0, // END_COLLECTION
      ]),
    })
  }
}

module.exports = Report
