const bleno = require('bleno')
const { green, red, blue } = require('chalk')

let isAdvertising = false
let lastStateChange = null

const BEACON_NAME = 'My Beacon'

bleno.on('stateChange', state => {
  if (lastStateChange !== state) {
    console.log('State Change:', blue(state))
    lastStateChange = state
  }

  if (state === 'poweredOn' && !isAdvertising) {
    bleno.startAdvertising(BEACON_NAME, ['ec00'])
    isAdvertising = true
  }

  if (state === 'poweredOff' && isAdvertising) {
    bleno.stopAdvertising()
    isAdvertising = false
  }
})

bleno.on('advertisingStart', error => {
  console.log('Starting Advertising:', error ? red(error) : green('success'))
})
