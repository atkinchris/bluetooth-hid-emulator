const bleno = require('bleno')
const { green, red, blue } = require('chalk')

let isAdvertising = false
let lastStateChange = null

const uuid = 'ad5d9ece-9331-48c2-b597-2845aac4a8f0'
const major = 0x12 // 0x0000 - 0xffff
const minor = 0x08 // 0x0000 - 0xffff
const measuredPower = -18 // -128 - 127

bleno.on('stateChange', state => {
  if (lastStateChange !== state) {
    console.log('State Change:', blue(state))
    lastStateChange = state
  }

  if (state === 'poweredOn' && !isAdvertising) {
    bleno.startAdvertisingIBeacon(uuid, major, minor, measuredPower)
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
