import React, {useEffect, useState} from "react";
import {AbstractPageableRequestManager} from "../../utilities/RequestManagers/Abstract/AbstractPageableRequestManager";
import {IPage} from "../../utilities/RequestManagers/Interfaces/IPage";
import {Enumerable, List} from "linqts";

import paginatorModule from "../../styles/Paginator/Paginator.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
    faRotateLeft,
    faRotateRight
} from "@fortawesome/free-solid-svg-icons";

export type PaginatorProps<T, Params extends IPage> = PaginatorPropsDispatch<T[]> & {
    requestManager: AbstractPageableRequestManager<T, Params>
}

export type PaginatorPropsDispatch<T> = {
    loadData: (data: T) => void
}

function Paginator<T, Params extends IPage>(props: PaginatorProps<T, Params>) {
    const [pageCount, setPageCount] = useState(props.requestManager.getPageCount())
    const numbers = Enumerable.Range(1, pageCount).ToArray()
    const [selected, select] = useState(1)


    useEffect(() => {
        props.requestManager.onLoadedPageCount = setPageCount
        props.requestManager.onIndexChanged = select
        props.requestManager.begin(props.loadData)
    }, [])

    const generateButtons = (): (JSX.Element | undefined)[] => {
        const offset = 6

        let range = Math.max(offset - selected, offset - Math.abs(selected - numbers.length))

        range = range > offset ? offset : range
        range = range < 3 ? 3 : range

        return new List(numbers).Select(x => {
            if (x == selected) {
                return <button data-style="selected">{x}</button>
            }
            if (x == 1) {
                return <button onClick={() => props.requestManager.loadPage(x - 1, props.loadData)}>{x}</button>
            }
            if (x == numbers.length) {
                return <button onClick={() => props.requestManager.loadPage(x - 1, props.loadData)}>{x}</button>
            }
            if (Math.abs(selected - x) == range) {
                return <button data-style="disabled">...</button>
            }
            if (Math.abs(selected - x) < range) {
                return <button onClick={() => props.requestManager.loadPage(x - 1, props.loadData)}>{x}</button>
            }

        }).ToArray()

    }

    return (
        <div className={paginatorModule.container}>
            <button onClick={() => props.requestManager.undo(props.loadData)}>
                <FontAwesomeIcon icon={faRotateLeft}/>
            </button>
            <button onClick={() => props.requestManager.begin(props.loadData)}>
                <FontAwesomeIcon icon={faAnglesLeft}/>
            </button>
            <button onClick={() => props.requestManager.pageBack(props.loadData)}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            {generateButtons()}
            <button onClick={() => props.requestManager.pageNext(props.loadData)}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </button>
            <button onClick={() => props.requestManager.end(props.loadData)}>
                <FontAwesomeIcon icon={faAnglesRight}/>
            </button>
            <button onClick={() => props.requestManager.redo(props.loadData)}>
                <FontAwesomeIcon icon={faRotateRight}/>
            </button>
        </div>
    )

}

export default Paginator;