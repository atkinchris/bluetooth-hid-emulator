const { PrimaryService } = require('bleno')

const DEVICE_INFORMATION_SERVICE_UUID = '180A'

class DeviceInformationService extends PrimaryService {
  constructor() {
    super({
      uuid: DEVICE_INFORMATION_SERVICE_UUID,
    })
  }
}

module.exports = DeviceInformationService
