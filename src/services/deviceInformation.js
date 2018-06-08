const { PrimaryService } = require('bleno')
const PNPId = require('../characteristics/pnpId')

const DEVICE_INFORMATION_SERVICE_UUID = '180A'

class DeviceInformationService extends PrimaryService {
  constructor() {
    super({
      uuid: DEVICE_INFORMATION_SERVICE_UUID,
      characteristics: [
        new PNPId(),
      ],
    })
  }
}

module.exports = DeviceInformationService
