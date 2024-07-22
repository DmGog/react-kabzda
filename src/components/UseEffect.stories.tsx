import {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}


export const Example = () => {
    console.log("example1")

    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("UseEffect")
    }, []);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        Hello: {counter}
    </>
}

