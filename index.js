const bleno = require('bleno')
const EchoCharacteristic = require('./characteristic')

const { PrimaryService } = bleno

console.log('bleno - echo')

bleno.on('stateChange', (state) => {
  console.log(`on -> stateChange: ${state}`)

  if (state === 'poweredOn') {
    bleno.startAdvertising('Node Keyboard', ['1812'])
  } else {
    bleno.stopAdvertising()
  }
})

bleno.on('advertisingStart', (error) => {
  console.log(`on -> advertisingStart: ${error ? `error ${error}` : 'success'}`)

  if (!error) {
    bleno.setServices([
      new PrimaryService({
        uuid: '1812',
        characteristics: [
          new EchoCharacteristic(),
        ],
      }),
    ])
  }
})
