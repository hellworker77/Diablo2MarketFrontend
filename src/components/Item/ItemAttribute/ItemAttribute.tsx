import React from "react";
import {ItemAttributeProps} from "../../../types/props/ItemAttributeProps";
import itemAttributeModule from "../../../styles/Item/ItemAttribute.module.css"

export class ItemAttribute extends React.Component<ItemAttributeProps>{
    render() {
        return(
            <div className={itemAttributeModule.container}>
                {this.props.itemAttribute.description}
            </div>
        )
    }
}