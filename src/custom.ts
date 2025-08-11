import { FSComponent } from '@microsoft/msfs-sdk';
import SpeedPage from './Speed/SpeedPage';

//@ts-ignore
class HelloWorldDisplay extends BaseInstrument {

    // Pages
    speedPage: SpeedPage;

    get templateID() {
        return "HelloWorldDisplay_ID";
    }
    constructor() {
        super();
        this.speedPage = SpeedPage.getInstance();
    }
    Init() {
        super.Init();
        console.log("HelloWorldDisplay initialized");
    }
    connectedCallback() {
        super.connectedCallback(); 
        //@ts-ignore
        FSComponent.render(FSComponent.buildComponent(SpeedPage), document.getElementById("HelloWorld"));
    }
}
//@ts-ignore
registerInstrument("simple-glasscockpit-sample", HelloWorldDisplay);