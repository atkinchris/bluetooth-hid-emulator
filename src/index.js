const bleno = require('bleno')
const { green, red, blue } = require('chalk')
const buildServices = require('./services')

const { services, uuids } = buildServices()
let servicesStarted = false
let isAdvertising = false
let lastStateChange = null

bleno.on('stateChange', (state) => {
  if (lastStateChange !== state) {
    console.log('State Change:', blue(state))
    lastStateChange = state
  }

  if (state === 'poweredOn' && !isAdvertising) {
    bleno.startAdvertising('Node Keyboard', uuids)
    isAdvertising = true
  }

  if (state === 'poweredOff' && isAdvertising) {
    bleno.stopAdvertising()
    isAdvertising = false
  }
})

bleno.on('advertisingStart', (error) => {
  console.log('Starting Advertising:', error ? red(error) : green('success'))

  if (!error && !servicesStarted) {
    servicesStarted = true
    bleno.setServices(services, (err) => {
      console.log('Starting Services:', err ? red(err) : green('success'))
    })
  }
})
