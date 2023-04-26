import { ReactComponent as Iconclock } from '../assets/icon-clock.svg';
import { ReactComponent as IconEthereum } from '../assets/icon-ethereum.svg';

function Status() {

    return (<div className="status">
        <div className="etherum-icon-wrapper">
            <IconEthereum className="icons" />
            <span>0.041 ETH</span>
        </div>
        <div className="time-wrapper">
            <Iconclock className="icons" />
            <span>3 days left</span>
        </div>
    </div>);
}


export default Status;