import Details from "./Details";
import Status from './Status';
import Creator from './Creator';
import { ReactComponent as IconView} from '../assets/icon-view.svg';
import EquImage from '../assets/image-equilibrium.jpg';




function Main() {

    return <div className="main-container" id="container">
            <div className="image-wrapper">
                <IconView className="view-icon"/>
                <img src={EquImage} alt="A cube on its axis"/>
            </div>
            <div className="nft-info-section">
                <Details />
                <Status />
                <hr></hr>
                <Creator />
            </div>
    </div>
}


export default Main;