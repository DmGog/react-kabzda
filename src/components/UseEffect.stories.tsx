import {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}


export const Example = () => {
    console.log("example1")

    const [counter, setCounter] = useState(0)

    // ******* сработает каждый раз после отрисовки компоненты ***********

    /* useEffect(() => {
         console.log("UseEffect")
     }, );*/

    // ******** сработает один раз после отрисовки компоненты *****************

    /*useEffect(() => {
        console.log("UseEffect")
    }, []);*/

    // ******** сработает при изменении зависимостей **********

    useEffect(() => {
        console.log("UseEffect")
    }, [counter]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        Hello: {counter}
    </>
}

