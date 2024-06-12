import React, {useState} from "react";
import "./App.css";
import UnAccordion from "./components/Accordion/UnAccordion";
import {UnRating} from "./components/Rating/UnRating";
import {OnOff} from "./components/OnOff/OnOFF";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering")

    let [rating, setRating] = useState<RatingValueType>(3)
    const [collapsedAccordion, setCollapsedAccordion] = useState(false)

    return (
        <div className={"myApp"}>
            <Page title={" Привет друг"}/>
            <OnOff/>
            <OnOff/>

            <Accordion titleValue={"контролируемый"} collapsed={collapsedAccordion}
                       setCollapsed={setCollapsedAccordion}/>
            Контролируемый рейтинг
            <Rating value={rating} onClick={setRating}/>

            <UnAccordion titleValue={"Меню на обед"}/>
            <UnAccordion titleValue={"Меню на ужин"}/>
            <UnRating/>
            <UnRating/>

        </div>
    );
}

type PagePropsType = {
    title: string
}

function Page(props: PagePropsType) {

    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
