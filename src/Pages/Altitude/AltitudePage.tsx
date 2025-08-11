import { DisplayComponent, FSComponent, VNode } from "@microsoft/msfs-sdk";
import { AltitudeInteractor } from "./Interactors/AltitudeInteractor";
import { AltitudeController } from "./Controller/AltitudeController";

export class AltitudePage extends DisplayComponent<any> {

    private static instance: AltitudePage | null = null;

    interactor!: AltitudeInteractor;
    controller!: AltitudeController;

    private constructor(props: any = { children: [] }) {
        super(props);
        // TODO: Construct interactor and controller here
    }

    public static getInstance(): AltitudePage {
        if (!AltitudePage.instance) {
            AltitudePage.instance = new AltitudePage();
        }
        return AltitudePage.instance;
    }

    render(): VNode | null {
        return (
            <div className="altitude-page">
                <h1>Altitude Page</h1>
            </div>
        );
    }
}
