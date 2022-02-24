import data from "../Data/Data.js";
export default function Image(props) {
    const name = props.location.pathname;
    const image = data.get(name);
    return (
        <img src={image.src} width="200px" height="200px" alt="#"/>
    )
}