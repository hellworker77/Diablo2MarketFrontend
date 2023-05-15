import {AppStateType} from "../../redux/store";
import {AddItem, AddItemPropsDispatch, AddItemPropsState} from "./AddItem";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {GlobalMediaActionType} from "../../types/reducerTypes/actionTypes/GlobalMediaActionType";
import {setBase64Image} from "../../redux/mediaReducer";

let mapStateToProps = (state: AppStateType): AddItemPropsState => {
    return {
        base64Image: state.mediaReducer.base64Image
    }
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalMediaActionType>): AddItemPropsDispatch => {
    return {
        setBase64Image: (base64Image: string) => {
            dispatch(setBase64Image(base64Image))
        }
    }
}

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem)

export default AddItemContainer