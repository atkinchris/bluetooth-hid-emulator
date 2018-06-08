const { Characteristic } = require('bleno')

const APPEARANCE_CHARACTERISTIC_UUID = '2A01'

class Appearance extends Characteristic {
  constructor() {
    super({
      uuid: APPEARANCE_CHARACTERISTIC_UUID,
      properties: ['read'],
      value: Buffer.from([0x961]),
    })
  }
}

module.exports = Appearance
