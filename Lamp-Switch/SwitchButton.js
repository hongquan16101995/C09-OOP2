class SwitchButton {
    status;
    lamp;

    constructor(status) {
        this.status = status;
    }

    connectToLamp(lamp) {
        this.lamp = lamp
    }

    switchOn(lamp) {
        this.status = true
        lamp.turnOn()
    }

    switchOff() {
        this.status = false
        this.lamp.turnOff()
    }
}