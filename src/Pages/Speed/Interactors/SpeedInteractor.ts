import { SimVarSpeedType, SpeedUnit, Speed} from "../entity/Speed";

export class SpeedInteractor implements Speed {

    public unit: SpeedUnit;
    public speed: SimVarSpeedType;


    constructor(unit: SpeedUnit, speed: SimVarSpeedType) {
        this.unit = unit;
        this.speed = speed;
    }

    getSpeed(): number {
        if(!SimVar.GetSimVarValue(this.speed, this.unit)) throw new Error("SimVar not available");

        return SimVar.GetSimVarValue(this.speed, this.unit);
    }

    getSpeedWithUnit(): string {
        return `${this.getSpeed()} ${this.unit}`;
    }
}
