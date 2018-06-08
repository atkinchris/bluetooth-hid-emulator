const bleno = require('bleno')
const buildServices = require('./services')

const { services, uuids } = buildServices()

bleno.on('stateChange', (state) => {
  console.log(`on -> stateChange: ${state}`)

  if (state === 'poweredOn') {
    bleno.startAdvertising('Node Keyboard', uuids)
  } else {
    bleno.stopAdvertising()
  }
})

bleno.on('advertisingStart', (error) => {
  console.log(`on -> advertisingStart: ${error ? `error ${error}` : 'success'}`)

  if (!error) {
    bleno.setServices(services, () => {
      console.log(`setServices: ${error ? `error ${error}` : 'success'}`)
    })
  }
})
