import { DisplayComponent, FSComponent, VNode } from "@microsoft/msfs-sdk";
import { AltimeterInteractor } from "./Interactors/AltimeterInteractor";
import { AltimeterController } from "./Controller/AltimeterController";

export class AltimeterPage extends DisplayComponent<any> {

    private static instance: AltimeterPage | null = null;

    interactor!: AltimeterInteractor;
    controller!: AltimeterController;

    private constructor(props: any = { children: [] }) {
        super(props);
        // TODO: Construct interactor and controller here
    }

    public static getInstance(): AltimeterPage {
        if (!AltimeterPage.instance) {
            AltimeterPage.instance = new AltimeterPage();
        }
        return AltimeterPage.instance;
    }

    render(): VNode | null {
        return (
            <div className="altimeter-page">
                <h1>Altimeter Page</h1>
            </div>
        );
    }
}
