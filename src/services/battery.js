const { PrimaryService } = require('bleno')

const BATTERY_SERVICE_UUID = '180F'

class BatteryService extends PrimaryService {
  constructor() {
    super({
      uuid: BATTERY_SERVICE_UUID,
    })
  }
}

module.exports = BatteryService
