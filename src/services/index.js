const HIDService = require('./hid')
const BatteryService = require('./battery')

const buildServices = () => {
  const services = [
    new HIDService(),
    new BatteryService(),
  ]
  const uuids = services.map(s => s.uuid)

  return {
    services,
    uuids,
  }
}

module.exports = buildServices
