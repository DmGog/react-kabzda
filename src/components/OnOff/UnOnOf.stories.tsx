import React from "react";
import {UnOnOFF} from "./UnOnOFF";
import {action} from "@storybook/addon-actions";

export default {
    title: "UnOnOFF stories",
    component: UnOnOFF
}

const callback = action("on of clicked");
export const UnOFF = () => {
    return <UnOnOFF defaultValue={false} onChange={callback}/>
}
export const UnOn = () => {
    return <UnOnOFF defaultValue={true} onChange={callback}/>
}
