import { Switch, Route } from "react-router-dom";
import data from "./Data/Data.js";
import Image from "./Image/Image";
export default function VideoCards() {
    return (
        <nav>
            <Switch>
                {data.info.map(item => {
                    return <Route key={item.name} path={`${item.name}`} component={Image}/>
                })}
            </Switch>
        </nav>
    )
}