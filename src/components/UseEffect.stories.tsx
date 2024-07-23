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
        document.title = counter.toString()
    }, [counter]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        Hello: {counter}
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")
    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, []);


    return <>
        <div style={{display: "flex", flexDirection: "column", gap: "5px", maxWidth: "100px"}}>
            Hello: {counter}
            <button onClick={() => setCounter(counter + 1)}> counter +</button>

            Hello: {fake}
            <button onClick={() => setFake(fake + 1)}> fake +</button>
        </div>
    </>
}
export const SetIntervalExample = () => {
    const myDate = new Date

    const [seconds, setSeconds] = useState(new Date().getSeconds())
    //
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(new Date().getSeconds())
        }, 1000)
        return () => clearInterval(interval);
    }, []);


    return <div style={{
        display: "flex",
        gap: "3px",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        border: "1px solid black",
        maxWidth: "300px"
    }}>
        <div style={{width: "90px", border: "1px solid black", textAlign: "center"}}>{myDate.getHours()}</div>
        <div style={{width: "90px", border: "1px solid black", textAlign: "center"}}>{myDate.getMinutes()}</div>
        <div style={{width: "90px", border: "1px solid black", textAlign: "center"}}>{seconds}</div>
    </div>
}

export const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

