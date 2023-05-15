import addItemModule from "../../styles/AddItem/AddItem.module.css"
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard, faImage, faPlus, faSheetPlastic, faWandMagic, faWandMagicSparkles} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {ItemRarityEnum} from "../../types/models/enums/ItemRarityEnum";

export type AddItemProps = AddItemPropsState & AddItemPropsDispatch

export type AddItemPropsState = {
    base64Image: string | null
}

export type AddItemPropsDispatch = {
    setBase64Image: (base64Image: string) => void
}


export const AddItem = (props: AddItemProps) => {
    
    const loadImageFromClipboard = () => {
        navigator.clipboard.read().then((data) => {
            const items = data[0].types;
            if (!items.includes("image/png")) return;
            data[0].getType("image/png").then((blob) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result as string;
                    props.setBase64Image(result);
                };
                reader.readAsDataURL(blob);
            });
        });
    };

    const itemRarityArray = Object.entries(ItemRarityEnum)
        .filter(([key, value]) => isNaN(Number(key)))
        .map(([key, value]) => [key, value]);

    return (
        <div className={`${addItemModule.container} ${uiModule.frame_gray}`}>
            <div className={`${uiModule.frame_brown} ${addItemModule.imgContainer}`}>
                {props.base64Image && <img src={props.base64Image} alt={"pasted image"}/>}
            </div>
            <div className={addItemModule.tools}>
                <div className={uiModule.frame_brown}
                     style={{padding: "10px"}}>
                    <div className={uiModule.header}>
                        <FontAwesomeIcon icon={faSheetPlastic} style={{marginRight: "10px"}}/>
                        Item name
                    </div>
                    <input className={uiModule.input} style={{margin: "10px 0"}} placeholder={"name"}/>
                </div>
                <div className={`${uiModule.frame_brown}`}
                     style={{padding: "10px"}}>
                    <div className={uiModule.header}>
                        <FontAwesomeIcon icon={faImage} style={{marginRight: "10px"}}/>
                        Item image
                    </div>
                    <div style={{display: "flex"}}>
                        <div className={uiModule.button}
                             onClick={loadImageFromClipboard}>
                            <div className={uiModule.green}>
                                <div style={{margin: "5px"}}>
                                    <FontAwesomeIcon icon={faClipboard} style={{marginRight: "10px"}}/>
                                    From Buffer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${uiModule.frame_brown}`}
                     style={{padding: "10px"}}>
                    <div className={uiModule.header}>
                        <FontAwesomeIcon icon={faWandMagicSparkles}
                                         style={{marginRight: "10px"}}/>
                        Item Rarity
                    </div>
                    <select className={uiModule.select}>
                        {itemRarityArray.map(x=>
                            <option value={x[1]}>{x[0]}</option>)}
                    </select>
                </div>

                <div className={uiModule.frame_brown}
                     style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                    <div className={uiModule.header}>
                        <FontAwesomeIcon icon={faWandMagic}
                                         style={{marginRight: "10px"}}/>
                        Attributes
                    </div>

                    <div style={{display: "flex"}}>
                        <div className={uiModule.button}
                             style={{margin: "0 5px 5px auto"}}>
                            <div className={uiModule.gray}>
                                <div style={{margin: "5px"}}>
                                    <FontAwesomeIcon icon={faPlus}
                                                     style={{marginRight: "10px"}}/>
                                    Add Attribute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}