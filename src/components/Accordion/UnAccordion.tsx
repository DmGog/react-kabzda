import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

function UnAccordion(props: AccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    const onClickHandler = () => dispatch({type: TOGGLE_CONSTANT})

    return (<div>
        <AccordionTitle onClick={onClickHandler} title={props.titleValue}/>
        {!state.collapsed && <AccordionBody/>}

    </div>)
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick} className={"accordion-title"}> {
            props.title
        }
        </h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>Борщ</li>
            <li>Картофель</li>
            <li>Салат</li>
            <li>Компот</li>
        </ul>
    )
}

export default UnAccordion;