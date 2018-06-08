const { Characteristic } = require('bleno')

const PNP_ID_CHARACTERISTIC_UUID = '2A50'

class PNPId extends Characteristic {
  constructor() {
    super({
      uuid: PNP_ID_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([0x02, 0xe502, 0xa111, 0x0210]),
    })
  }
}

module.exports = PNPId
