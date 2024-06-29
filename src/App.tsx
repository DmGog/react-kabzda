import React, {useState} from "react";
import "./App.css";
import UnAccordion from "./components/Accordion/UnAccordion";
import {UnRating} from "./components/Rating/UnRating";
import {UnOnOFF} from "./components/OnOff/UnOnOFF";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOFF} from "./components/OnOff/OnOFF";
import {MySelect} from "./components/Select/MySelect";

function App() {


    let [rating, setRating] = useState<RatingValueType>(3)
    const [collapsedAccordion, setCollapsedAccordion] = useState(false)
    let [on, setOn] = useState(false)

    const [collapsedSelect, setCollapsedSelect] = useState(true)
    const [titleSelect, setTitleSelect] = useState("список")

    return (
        <div className={"myApp"}>
            <MySelect
                titleSelect={titleSelect} setTitleSelect = {setTitleSelect}
                collapsedSelect={collapsedSelect}
                setCollapsedSelect={setCollapsedSelect} onChance={() => {
            }} items={[{title: "Борщ", value: "1"}, {title: "картошка", value: "2"}]}/>
            <Page title={" Привет друг"}/>
            <UnOnOFF/>
            <UnOnOFF/>

            <Page title={"Контролируемые кнопки"}/>
            <OnOFF on={on} setOn={setOn}/>

            <Accordion onClick={() => {
            }} titleValue={"контролируемый список"} collapsed={collapsedAccordion}
                       setCollapsed={setCollapsedAccordion}
                       items={[{title: "Борщ", value: "1"}, {title: "картошка", value: "2"}]}/>
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
