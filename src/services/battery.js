const { PrimaryService } = require('bleno')
const BatteryLevelCharacteristic = require('../characteristics/batteryLevel')

const BATTERY_SERVICE_UUID = '180F'

class BatteryService extends PrimaryService {
  constructor() {
    super({
      uuid: BATTERY_SERVICE_UUID,
      characteristics: [
        new BatteryLevelCharacteristic(),
      ],
    })
  }
}

module.exports = BatteryService
