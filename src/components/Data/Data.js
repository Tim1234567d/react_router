import Gtx950 from "../../Assets/GTX950.jpg";
import Gtx1050ti from "../../Assets/GTX1050ti.jpg";
import Gtx1660SUPER from "../../Assets/GTX1660SUPER.jpg";
import Gtx1080ti from "../../Assets/GTX1080.jpg";

const VideoCards = {
    info:
        [
            { name: "/GTX950", src: Gtx950 },
            { name: "/GTX1050ti", src: Gtx1050ti },
            { name: "/GTX1660SUPER", src: Gtx1660SUPER },
            { name: "/GTX1080", src: Gtx1080ti },
        ],
        get: function(name){
            const item = this.info.find(i =>  i.name === name);
            return item;  
        }

}
export default VideoCards;