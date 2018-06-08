const { PrimaryService } = require('bleno')
const PNPId = require('../characteristics/pnpId')

const GENERIC_ACCESS_SERVICE_UUID = '1800'

class GenericAccessService extends PrimaryService {
  constructor() {
    super({
      uuid: GENERIC_ACCESS_SERVICE_UUID,
      characteristics: [
        new PNPId(),
      ],
    })
  }
}

module.exports = GenericAccessService
