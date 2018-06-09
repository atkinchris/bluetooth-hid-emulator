const { Characteristic } = require('bleno')

const ECHO_CHARACTERISTIC_UUID = 'EC0E'

class EchoCharacteristic extends Characteristic {
  constructor() {
    super({
      uuid: ECHO_CHARACTERISTIC_UUID,
      properties: ['read', 'write', 'notify'],
      value: null,
    })
    this.value = Buffer.alloc(0)
    this.updateValueCallback = null
  }

  onReadRequest(offset, callback) {
    console.log(`EchoCharacteristic - onReadRequest: value = ${this.value.toString('hex')}`)
    callback(this.RESULT_SUCCESS, this.value)
  }

  onWriteRequest(data, offset, withoutResponse, callback) {
    this.value = data
    console.log(`EchoCharacteristic - onWriteRequest: value = ${this.value.toString('hex')}`)
    if (this.updateValueCallback) {
      console.log('EchoCharacteristic - onWriteRequest: notifying')
      this.updateValueCallback(this.value)
    }
    callback(this.RESULT_SUCCESS)
  }

  onSubscribe(maxValueSize, updateValueCallback) {
    console.log('EchoCharacteristic - onSubscribe')
    this.updateValueCallback = updateValueCallback
  }

  onUnsubscribe() {
    console.log('EchoCharacteristic - onUnsubscribe')
    this.updateValueCallback = null
  }
}

module.exports = EchoCharacteristic
