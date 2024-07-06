import React, {useReducer} from "react";
import {reducerRating} from "./ReducerRating";

type RatingPropsType = {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
    onChange?: (rating: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function UnRating(props: RatingPropsType) {
    let [state, dispatch] = useReducer(reducerRating, {rating: props.defaultValue || 0})
    const setRating = (rating: 0 | 1 | 2 | 3 | 4 | 5) => {
        dispatch({type: "SET_RATING", payload: rating})
    }

    return (<div>
            <Star setRating={setRating} rating={1} selected={state.rating > 0}/>
            <Star setRating={setRating} rating={2} selected={state.rating > 1}/>
            <Star setRating={setRating} rating={3} selected={state.rating > 2}/>
            <Star setRating={setRating} rating={4} selected={state.rating > 3}/>
            <Star setRating={setRating} rating={5} selected={state.rating > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    onClick?: () => void
    setRating: (rating: 0 | 1 | 2 | 3 | 4 | 5) => void
    rating: 0 | 1 | 2 | 3 | 4 | 5


}

function Star(props: StarPropsType) {
    return <button onClick={() => {
        props.setRating(props.rating)
    }}>{props.selected ? "★" : "☆"}</button>
}