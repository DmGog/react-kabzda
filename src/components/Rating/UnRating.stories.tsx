import React from "react";
import {UnRating} from "./UnRating";
import {action} from "@storybook/addon-actions";

export default {
    title: "UnRating stories",
    component: UnRating
}

const callback = action("unRating")
export const EmptyUnRating = () => {
    return <UnRating defaultValue={0} onChange={callback}/>
}
export const UnRating1 = () => {
    return <UnRating defaultValue={1} onChange={callback}/>
}
export const UnRating2 = () => {
    return <UnRating defaultValue={2} onChange={callback}/>
}
export const UnRating3 = () => {
    return <UnRating defaultValue={3} onChange={callback}/>
}
export const UnRating4 = () => {
    return <UnRating defaultValue={4} onChange={callback}/>
}
export const UnRating5 = () => {
    return <UnRating defaultValue={5} onChange={callback}/>
}

