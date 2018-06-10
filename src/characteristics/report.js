const { Characteristic } = require('bleno')

const REPORT_CHARACTERISTIC_UUID = '2A4D'

class Report extends Characteristic {
  constructor() {
    super({
      uuid: REPORT_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([
        0x00, // Modifier Key
        0x00, // Reserved
        0x00, // Key 1
        0x00, // Key 2
        0x00, // Key 3
        0x00, // Key 4
        0x00, // Key 5
        0x00, // Key 6
      ]),
    })
  }
}

module.exports = Report
