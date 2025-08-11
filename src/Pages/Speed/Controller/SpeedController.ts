import { SpeedInteractor } from "../Interactors/SpeedInteractor";
import RoundingUtils from "../../../Utils/RoundingUtils"; // Adjust the path as needed

export class SpeedController {
    private speedInteractor: SpeedInteractor;

    constructor(speedInteractor: SpeedInteractor) {
        this.speedInteractor = speedInteractor;
    }

    public getSpeed(): number | string {
        try {
            return RoundingUtils.removeDecimals(this.speedInteractor.getSpeed());
        } catch (error) {
            return "XXX";
        }
    }
}