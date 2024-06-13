import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }


    console.log("Accordion rendering")
    return (<div>
        <AccordionTitle onChange={onClickHandler} title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}

    </div>)
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={props.onChange} className={"accordion-title"}> {
            props.title
        }
        </h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>Борщ</li>
            <li>Картофель</li>
            <li>Салат</li>
            <li>Компот</li>
        </ul>
    )
}

