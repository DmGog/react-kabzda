import type {Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import {Accordion} from "./Accordion";
import React, {useState} from "react";

//👇 This default export determines where your story goes in the story list
// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };

// export default meta;

export default {
    title: "Accordion stories",
    component: Accordion,
}

const setCollapsedHandler = action("setCollapsed")

const onClickCallback = action("some item was clicked")
export const CollapsedAccordion = () => {
    return <Accordion titleValue={"CollapsedAccordion"} collapsed={true}
                      setCollapsed={setCollapsedHandler} items={[]} onClick={onClickCallback}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"OpenedAccordion"} collapsed={false}
                      setCollapsed={setCollapsedHandler}
                      items={[{title: "Борщ", value: "1"}, {title: "картошка", value: "2"}]} onClick={onClickCallback}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={"AccordionDemo"} collapsed={collapsed}
                      setCollapsed={() => setCollapsed(!collapsed)}
                      items={[{title: "Борщ", value: "1"}, {title: "картошка", value: "2"}]}
                      onClick={onClickCallback}

    />
}