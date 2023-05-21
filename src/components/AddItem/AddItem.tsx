import addItemModule from "../../styles/AddItem/AddItem.module.css"
import uiModule from "../../styles/Ui.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faClipboard,
    faCoins,
    faImage,
    faPlus,
    faSheetPlastic,
    faWandMagic,
    faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {ItemRarityEnum} from "../../types/models/enums/ItemRarityEnum";
import {MediaLoader} from "../../utilities/MediaLoader/MediaLoader";
import {ItemAttributeType} from "../../types/models/ItemAttributeType";
import {v4} from "uuid";
import AddItemAttributeContainer from "./AddItemAttribute/AddItemAttributeContainer";

export type AddItemProps = AddItemPropsState & AddItemPropsDispatch

export type AddItemPropsState = {
    base64Image: string | null
    itemImageToUpload: File | null
    itemNameToUpload: string
    itemPriceToUpload: number
    itemRarityToUpload: ItemRarityEnum
    itemAttributesToUpload: Array<ItemAttributeType>
}

export type AddItemPropsDispatch = {
    setBase64Image: (base64Image: string) => void
    setItemPriceToUpload: (price: number) => void
    setItemImageToUpload: (image: File) => void
    setItemNameToUpload: (name: string) => void
    setItemRarityToUpload: (rarity: ItemRarityEnum) => void
    addItemAttribute: () => void
}


export const AddItem = (props: AddItemProps) => {
    const itemNameRef = React.createRef<HTMLInputElement>()
    const itemPriceRef = React.createRef<HTMLInputElement>()
    const itemRarityRef = React.createRef<HTMLSelectElement>()

    const select = () => {
        let parsedValue = Number(itemRarityRef.current?.value ?? "")
        if (!isNaN(parsedValue)) {
            props.setItemRarityToUpload(parsedValue)
        }
    }

    const validateItem = () => {
        return props.itemNameToUpload.length > 0 &&
            props.itemImageToUpload !== null
    }

    const [ableToUpload, setAbleToUpload] = useState(validateItem())

    useEffect(() => {
        setAbleToUpload(validateItem())
    }, [props])

    const loadImageFromClipboard = () => {
        navigator.clipboard.read().then(data => {
            const items = data[0].types;
            if (!items.includes("image/png")) return;
            data[0].getType("image/png").then(blob => {
                const reader = new FileReader();
                reader.onload = async () => {
                    const result = reader.result as string;
                    const response = await fetch(result);
                    const blobData = await response.blob();
                    const file = new File([blobData],
                        "item.png",
                        {type: "image/png"});
                    props.setItemImageToUpload(file)
                    MediaLoader.convertFileToImage(file, props.setBase64Image)
                };
                reader.readAsDataURL(blob);
            });
        });
    };

    const itemRarityArray = Object.entries(ItemRarityEnum)
        .filter(([key, value]) => isNaN(Number(key)))
        .map(([key, value]) => [key, value]);

    return (
        <div className={`${addItemModule.container} ${uiModule.frame_gray}`}
             style={{marginTop: "20px"}}>
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
                    <input className={uiModule.input}
                           ref={itemNameRef}
                           value={props.itemNameToUpload}
                           onChange={() => props.setItemNameToUpload(itemNameRef.current?.value ?? "")}
                           style={{margin: "10px 0"}}
                           placeholder={"name"}/>
                </div>
                <div className={uiModule.frame_brown}
                     style={{padding: "10px"}}>
                    <div className={uiModule.header}>
                        <FontAwesomeIcon icon={faCoins} style={{marginRight: "10px"}}/>
                        Item price
                    </div>
                    <input className={uiModule.input}
                           ref={itemPriceRef}
                           value={props.itemPriceToUpload}
                           onChange={() => props.setItemPriceToUpload(Number(itemPriceRef.current?.value) ?? 0)}
                           style={{margin: "10px 0"}}
                           placeholder={"price"}/>
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
                    <select className={uiModule.select}
                            ref={itemRarityRef}
                            value={props.itemRarityToUpload}
                            onChange={() => select()}>
                        {itemRarityArray.map(x =>
                            <option key={v4()} value={x[1]}>{x[0]}</option>)}
                    </select>
                </div>
                <div className={uiModule.frame_brown}
                     style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                    <div className={uiModule.header}>
                        <FontAwesomeIcon icon={faWandMagic}
                                         style={{marginRight: "10px"}}/>
                        Items Attributes
                        <div style={{display: "grid", gridAutoFlow: "row"}}> {
                            props.itemAttributesToUpload.map(attribute =>
                                <AddItemAttributeContainer itemAttribute={attribute}/>
                            )
                        }
                        </div>
                    </div>

                    <div style={{display: "flex"}}>
                        <div className={uiModule.button}
                             onClick={() => props.addItemAttribute()}
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

                <div style={{display: "flex"}}>
                    <div className={uiModule.button} data-disabled={!ableToUpload}
                         style={{margin: "0 5px 5px auto"}}>
                        <div className={uiModule.green}>
                            <div style={{margin: "5px"}}>
                                <FontAwesomeIcon icon={faPlus}
                                                 style={{marginRight: "10px"}}/>
                                Add Item
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}