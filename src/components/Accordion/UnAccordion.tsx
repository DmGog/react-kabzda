import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UnAccordion(props: AccordionPropsType) {


    const [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }


    // console.log("Accordion rendering")
    return (<div>
        <AccordionTitle onClick={onClickHandler} title={props.titleValue}/>
        {/*<button onClick={onClickHandler}>свернуть-развернуть</button>*/}
        {!collapsed && <AccordionBody/>}


    </div>)
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log("AccordionTitle rendering")

    return (
        <h3 onClick={props.onClick} className={"accordion-title"}> {
            props.title
        }
        </h3>
    )
}

function AccordionBody() {
    // console.log("AccordionBody rendering")
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