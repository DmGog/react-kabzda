import {action} from "@storybook/addon-actions";
import {SelectByDimych} from "./SelectByDimych";
import {useState} from "react";

export default {
    title: "Select",
    component: SelectByDimych
}
export const Base = () => {
    const [value, setValue] = useState("2")
    return <>

        <SelectByDimych items={[
            {value: "1", title: "Minsk"},
            {value: "2", title: "Msk"},
            {value: "3", title: "Msk"},
            {value: "4", title: "Msk"}
        ]} value={value} onChange={setValue}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <SelectByDimych value={value} items={[
            {value: "1", title: "Minsk"},
            {value: "2", title: "Msk"}
        ]} onChange={setValue}/>
    </>
}
