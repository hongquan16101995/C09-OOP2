class Lamp {
    status;

    constructor(status) {
        this.status = status
    }

    getStatus() {
        return this.status
    }

    setStatus(status) {
        this.status = status
    }

    turnOn() {
        this.status = true
    }

    turnOff() {
        this.status = false
    }
}