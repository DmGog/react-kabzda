import React, {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "UnInput stories",

}


export const UncontrolledInput = () => <input/>
export const UncontrolledInputTrackValue = () => {

    const [value, setValue] = useState("")

    return <>
        <input onChange={(event) => {
            const actionValue = event.currentTarget.value
            setValue(actionValue)
        }}/>{value}
    </>
}
export const GetUncontrolledInputTrackValueByButton = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save
            </button>
            актуальное значение: {value}
        </>
    )
}


export const ControlledInputFixed = () => <input value={"24"}/>
export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState("")
    return (
        <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>)
}

export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(true)
    return (
        <input type={"checkbox"} checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>)
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    return (
        <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moskow</option>
        </select>)
}