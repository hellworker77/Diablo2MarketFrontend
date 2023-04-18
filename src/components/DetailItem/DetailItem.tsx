import React from "react";
import {DetailItemProps} from "../../types/props/DetailItemProps";
import {GetItemByIdRequestManager} from "../../utilities/RequestHandlerFactory/Trading/GetItemByIdRequestManager";
import uiModule from '../../styles/Ui.module.css'
import {RarityToColorConverter} from "../../utilities/RarityToColorConverter";
import ItemAttributeContainer from "./ItemAttribute/ItemAttributeContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export class DetailItem extends React.Component<DetailItemProps> {
    async componentDidMount() {
        let requestManager = new GetItemByIdRequestManager(this.props.itemId)
        let item = await requestManager.execute();
        if (item !== undefined) {
            this.props.loadItem(item)
        }

    }

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faArrowLeft}
                                 style={{color: "white",cursor:"pointer",fontSize:"20px"}}
                                 onClick={()=>{window.history.back();}}/>
                <div className={uiModule.frame_gray}>

                    <div className={uiModule.preloader}
                         style={{width: "200px"}}>
                    </div>
                    <div style={{color: RarityToColorConverter(this.props.loadedItem?.rarity), margin: "5px auto"}}>
                        {this.props.loadedItem?.name}
                    </div>
                    {
                        this.props.loadedItem?.attributes.map(attribute =>
                            <ItemAttributeContainer key={attribute.id}
                                                    itemAttribute={attribute}/>
                        )}
                </div>
            </div>

        )
    }
}


export default DetailItem;