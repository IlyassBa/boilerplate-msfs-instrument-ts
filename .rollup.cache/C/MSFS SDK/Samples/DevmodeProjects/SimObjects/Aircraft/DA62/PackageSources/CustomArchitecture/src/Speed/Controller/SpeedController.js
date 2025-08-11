export class SpeedController {
    constructor(speedInteractor) {
        this.speedInteractor = speedInteractor;
    }
    getSpeed() {
        try {
            return this.speedInteractor.getSpeed();
        }
        catch (error) {
            return new Error("Failed to get speed: Unknown error");
        }
    }
}
//# sourceMappingURL=SpeedController.js.map