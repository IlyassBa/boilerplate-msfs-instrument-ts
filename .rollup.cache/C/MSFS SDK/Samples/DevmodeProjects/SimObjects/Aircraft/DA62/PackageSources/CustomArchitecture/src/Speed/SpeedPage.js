import { DisplayComponent, FSComponent } from "@microsoft/msfs-sdk";
import RoundingUtils from "../Utils/RoundingUtils";
import { SpeedInteractor } from "./Interactors/SpeedInteractor";
import { SpeedController } from "./Controller/SpeedController";
import { SimVarSpeedType, SpeedUnit } from "./entity/Speed";
class SpeedPage extends DisplayComponent {
    constructor(props = { children: [] }) {
        super(props);
        this.speedInteractor = new SpeedInteractor(SpeedUnit.KNOTS, SimVarSpeedType.INDICATED);
        this.speedController = new SpeedController(this.speedInteractor);
    }
    static getInstance() {
        if (!SpeedPage.instance) {
            SpeedPage.instance = new SpeedPage();
        }
        return SpeedPage.instance;
    }
    render() {
        return (FSComponent.buildComponent("div", { className: "speed-page" },
            FSComponent.buildComponent("h1", null, "Speed Page"),
            FSComponent.buildComponent("p", null,
                "Speed: ",
                typeof this.speedController.getSpeed() === "number"
                    ? RoundingUtils.removeDecimals(this.speedController.getSpeed())
                    : "XXX")));
    }
}
SpeedPage.instance = null;
export default SpeedPage;
//# sourceMappingURL=SpeedPage.js.map