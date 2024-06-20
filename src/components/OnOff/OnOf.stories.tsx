import React, {useState} from "react";
import {OnOFF} from "./OnOFF";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOFF stories",
    component: OnOFF
}

const callback = action("on of clicked");
export const OnOFFTrue = () => {
    return <OnOFF on={true} setOn={callback}/>
}
export const OnOFFFalse = () => {
    return <OnOFF on={false} setOn={callback}/>
}
export const changeOnOf = () => {
    const [onOf, setOnOf] = useState(true)
    return <OnOFF on={onOf} setOn={setOnOf}/>
}
