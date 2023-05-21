import {ItemAttributeType} from "../../../types/models/ItemAttributeType";
import uiModule from "../../../styles/Ui.module.css"
import addItemAttributeModule from "../../../styles/AddItem/AddItemAttribute.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";

export type AddItemAttributeProps = AddItemAttributePropsState & AddItemAttributePropsDispatch & {
    itemAttribute: ItemAttributeType
}

export type AddItemAttributePropsState = {}

export type AddItemAttributePropsDispatch = {
    setItemAttributeById: (name: string, id: string) => void
    deleteItemAttributeById: (id: string) => void
}

export const AddItemAttribute = (props: AddItemAttributeProps) => {
    const nameRef = React.createRef<HTMLInputElement>()
    return (
        <div style={{display: "flex", marginTop:"10px"}}>
            <input className={uiModule.input}
                   ref={nameRef}
                   onChange={()=>props.setItemAttributeById( props.itemAttribute?.id ?? "", nameRef.current?.value ?? "")}
                   style={{marginRight: "10px", width: "100%"}}
                   value={props.itemAttribute.name}/>
            <FontAwesomeIcon icon={faTrash}
                             onClick={()=>{props.deleteItemAttributeById(props.itemAttribute?.id ?? "")}}
                             className={addItemAttributeModule.button}
                             style={{margin: "auto 0 auto auto"}}/>
        </div>
    )
}