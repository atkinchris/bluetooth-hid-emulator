const { PrimaryService } = require('bleno')

const PNPId = require('../characteristics/pnpId')
const { to128Bit } = require('../utils/uuid')

const DEVICE_INFORMATION_SERVICE_UUID = to128Bit('180A')

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
