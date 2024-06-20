import React, {useState} from "react";
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: "Rating stories",
    component: Rating
}

const callback = action("rating checked")
export const EmptyRating = () => {
    return <Rating value={0} onClick={callback}/>
}
export const Rating1 = () => {
    return <Rating value={1} onClick={callback}/>
}
export const Rating2 = () => {
    return <Rating value={2} onClick={callback}/>
}
export const Rating3 = () => {
    return <Rating value={3} onClick={callback}/>
}
export const Rating4 = () => {
    return <Rating value={4} onClick={callback}/>
}
export const Rating5 = () => {
    return <Rating value={5} onClick={callback}/>
}
export const changeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating}/>
}
