import React, {useState} from "react";
import "./App.css";
import UnAccordion from "./components/Accordion/UnAccordion";
import {UnRating} from "./components/Rating/UnRating";
import {UnOnOFF} from "./components/OnOff/UnOnOFF";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOFF} from "./components/OnOff/OnOFF";

function App() {
    console.log("App rendering")

    let [rating, setRating] = useState<RatingValueType>(3)
    const [collapsedAccordion, setCollapsedAccordion] = useState(false)
    let [on, setOn] = useState(false)

    return (
        <div className={"myApp"}>
            <Page title={" Привет друг"}/>
            <UnOnOFF/>
            <UnOnOFF/>

            <Page title={"Не контролируемые кнопки"}/>
            <OnOFF on={on} setOn={setOn}/>

            <Accordion titleValue={"контролируемый список"} collapsed={collapsedAccordion}
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
