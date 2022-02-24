import { NavLink } from "react-router-dom";
import "./Nav.css"
import data from "../Data/Data.js"
export default function Nav() {
    return (
        <nav>
            <ul>
                {data.info.map(item => {
                    return <li
                        key={item.name}>
                        <NavLink
                            className="standart"
                            activeClassName="active"
                            to={item.name}
                            >
                            {item.name.split("/")}
                        </NavLink>
                    </li>
                })}
            </ul>
        </nav>
    )
}