import React from "react";
import {ItemAttributeProps} from "../../../types/props/ItemAttributeProps";
import itemAttributeModule from "../../../styles/Item/ItemAttribute.module.css"

const ItemAttribute = (props: ItemAttributeProps) => {
    return(
        <div className={itemAttributeModule.container}>
            {props.itemAttribute.description}
        </div>
    )
}

export default ItemAttribute;