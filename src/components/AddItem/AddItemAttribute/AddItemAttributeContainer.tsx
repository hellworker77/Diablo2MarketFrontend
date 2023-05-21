import {AppStateType} from "../../../redux/store";
import {AddItem} from "../AddItem";
import {Dispatch} from "redux";
import {GlobalTradingActionType} from "../../../types/reducerTypes/actionTypes/GlobalTradingActionType";
import {connect} from "react-redux";
import {AddItemAttribute, AddItemAttributePropsDispatch, AddItemAttributePropsState} from "./AddItemAttribute";
import {deleteItemAttributeActionCreate, setItemAttributeActionCreate} from "../../../redux/tradingReducer";


let mapStateToProps = (state: AppStateType): AddItemAttributePropsState => {
    return {}
}

let mapDispatchToProps = (dispatch: Dispatch<GlobalTradingActionType>): AddItemAttributePropsDispatch => {
    return {
        setItemAttributeById: (id: string, name: string) => {
            dispatch(setItemAttributeActionCreate(name, id))
        },
        deleteItemAttributeById: (id: string) => {
            dispatch(deleteItemAttributeActionCreate(id))
        }
    }
}

const AddItemAttributeContainer = connect(mapStateToProps, mapDispatchToProps)(AddItemAttribute)

export default AddItemAttributeContainer