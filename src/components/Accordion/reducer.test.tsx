import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test("изменение значения редьюсера на противоположное", () => {
// data
    const state: StateType = {
        collapsed: false
    }
// action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    // expection
    expect(newState.collapsed).toBe(true)

})

test("проверка ошибки", () => {
// data
    const state: StateType = {
        collapsed: false
    }

    reducer(state, {type: TOGGLE_CONSTANT})

    // expection
    expect(() => {
        reducer(state, {type: "Face"})
    }).toThrowError()

})