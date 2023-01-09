import {FC, ReactElement} from "react";
import Pitch from "./pitch/Pitch";

const Layout: FC = (): ReactElement => {

    const resetPitch = () => {
        localStorage.removeItem("grid-layout");
        document.location.reload();
    }

    return <div className="layout">
        <Pitch width={400} height={600}/>
        <button onClick={resetPitch} key={"resetPitch"} value={"Reset"} name={"Reset"}>Reset</button>
    </div>

}
export default Layout;