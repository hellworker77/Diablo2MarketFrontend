import React from "react"
import {RightSideBarProps} from "../../types/props/RightSideBarProps";
import {
    GetLast24HoursDealsRequestManager
} from "../../utilities/RequestHandlerFactory/Trading/GetLast24HoursDealsRequestManager";
import uiModule from "../../styles/Ui.module.css"
import DealContainer from "../Deal/DealContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";

export class RightSideBar extends React.Component<RightSideBarProps> {
    async componentDidMount() {
        let requestManager = new GetLast24HoursDealsRequestManager({index: 0, size: 50})
        let deals = await requestManager.execute()

        if (deals !== undefined) {
            this.props.loadLast24Deals(deals);
        }
    }

    render() {
        return (
            <div className={uiModule.frame_brown}
                 style={{margin: "20px", padding: "10px"}}>
                <div className={`${uiModule.header} ${uiModule.row_content_container}`}><FontAwesomeIcon icon={faCoins} />Last Deals</div>
                {this.props.last24Deals.map(deal =>
                    <DealContainer deal={deal}/>
                )}
            </div>
        )
    }
}

export default RightSideBar;