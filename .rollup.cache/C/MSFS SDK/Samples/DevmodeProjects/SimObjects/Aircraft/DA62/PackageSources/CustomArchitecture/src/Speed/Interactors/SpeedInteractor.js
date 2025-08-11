export class SpeedInteractor {
    constructor(unit, speed) {
        this.unit = unit;
        this.speed = speed;
    }
    getSpeed() {
        if (!SimVar.GetSimVarValue("AIRSPEED INDICATED", this.unit))
            throw new Error("SimVar not available");
        return SimVar.GetSimVarValue("AIRSPEED INDICATED", this.unit);
    }
    getSpeedWithUnit() {
        return `${this.getSpeed()} ${this.unit}`;
    }
}
//# sourceMappingURL=SpeedInteractor.js.map