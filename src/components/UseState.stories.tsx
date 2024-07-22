import {useState} from "react";

export default {
    title: "use state demo"
}

function generateData() {
    console.log("generateData")
    return 1
}

export const Example = () => {
    console.log("example1")

    const [counter, setCounter] = useState(generateData)
    const changer = (state: number) => {
        return state + 1
    }
    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}

