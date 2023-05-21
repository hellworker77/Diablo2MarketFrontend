import {AppStateType} from "../../redux/store";
import {AddItem, AddItemPropsDispatch, AddItemPropsState} from "./AddItem";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {GlobalMediaActionType} from "../../types/reducerTypes/actionTypes/GlobalMediaActionType";
import {setBase64Image, setItemPhotoToUploadActionCreate} from "../../redux/mediaReducer";
import {GlobalTradingActionType} from "../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {
    addItemAttributeActionCreate,
    setItemNameToUploadActionCreate, setItemPriceToUploadActionCreate,
    setItemRarityToUploadActionCreate
} from "../../redux/tradingReducer";
import {ItemRarityEnum} from "../../types/models/enums/ItemRarityEnum";

let mapStateToProps = (state: AppStateType): AddItemPropsState => {
    return {
        itemImageToUpload: state.mediaReducer.itemPhotoToUpload,
        itemNameToUpload: state.tradingReducer.itemNameToUpload,
        itemPriceToUpload: state.tradingReducer.itemPriceToUpload,
        itemRarityToUpload: state.tradingReducer.itemRarityToUpload,
        base64Image: state.mediaReducer.base64Image,
        itemAttributesToUpload: state.tradingReducer.itemAttributesToUpload
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalMediaActionType | GlobalTradingActionType>): AddItemPropsDispatch => {
    return {
        setItemImageToUpload: (image: File) => {
            dispatch(setItemPhotoToUploadActionCreate(image))
        },
        setItemNameToUpload: (name: string) => {
            dispatch(setItemNameToUploadActionCreate(name))
        },
        setItemPriceToUpload: (price: number) => {
            dispatch(setItemPriceToUploadActionCreate(price))
        },
        setItemRarityToUpload: (rarity: ItemRarityEnum) => {
            dispatch(setItemRarityToUploadActionCreate(rarity))
        },
        setBase64Image: (base64Image: string) => {
            dispatch(setBase64Image(base64Image))
        },
        addItemAttribute: () => {
            dispatch(addItemAttributeActionCreate())
        }
    }
}

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem)

export default AddItemContainer