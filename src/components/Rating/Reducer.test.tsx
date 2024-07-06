import {reducerRating, StateTypeRating} from "./ReducerRating";
import {reducer} from "../Accordion/reducer";


test("rating", () => {

    const state: StateTypeRating = {
        rating: 1
    }
    const newRating = reducerRating(state, {
        type: "SET_RATING", payload: 4
    })
    expect(newRating.rating).toBe(4)

})

test("rating error", () => {

    const state: StateTypeRating = {
        rating: 2
    }

    expect(() => {
        reducerRating(state, {
            type: "Fake", payload: 4
        })
    }).toThrowError()
})

