import React from "react";
import {ItemProps} from "../../types/props/ItemProps";
import {GetItemByIdRequestManager} from "../../utilities/RequestHandlerFactory/Trading/GetItemByIdRequestManager";
import uiModule from '../../styles/Ui.module.css'
import {rarityToColorConverter} from "../../utilities/rarityToColorConverter";
import ItemAttributeContainer from "./ItemAttribute/ItemAttributeContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export class Item extends React.Component<ItemProps> {
    async componentDidMount() {
        let requestManager = new GetItemByIdRequestManager({itemId: this.props.itemId})
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
                    <div style={{color: rarityToColorConverter(this.props.loadedItem?.rarity), margin: "5px auto"}}>
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


export default Item;