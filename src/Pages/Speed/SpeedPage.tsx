
import { DisplayComponent, FSComponent, VNode } from "@microsoft/msfs-sdk";
import RoundingUtils from "../../Utils/RoundingUtils";
import {SpeedInteractor} from "./Interactors/SpeedInteractor";
import {SpeedController} from "./Controller/SpeedController";
import { SimVarSpeedType, SpeedUnit } from "./entity/Speed";



export default class SpeedPage extends DisplayComponent<any> {
    private static instance: SpeedPage | null = null;

    interactor: SpeedInteractor;
    controller: SpeedController;

    private constructor(props: any = { children: [] }) {
        super(props);
        this.interactor = new SpeedInteractor(SpeedUnit.KNOTS, SimVarSpeedType.INDICATED);
        this.controller = new SpeedController(this.interactor);
    }

    public static getInstance(): SpeedPage {
        if (!SpeedPage.instance) {
            SpeedPage.instance = new SpeedPage();
        }
        return SpeedPage.instance;
    }

    public render(): VNode {


        return (
            <div className="speed-page">
                <h1>Speed Page</h1>
                <p>

                    {this.controller.getSpeed()}
                    {/* Speed: {
                        typeof this.speedController.getSpeed() === "number"
                            ? RoundingUtils.removeDecimals(this.speedController.getSpeed() as number)
                            : "XXX"
                    } */}
                </p>
            </div>
        );
        
    }
}
