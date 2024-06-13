import React from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}


export const OnOFF = (props: OnOffPropsType) => {

        const {on, setOn} = props
        // const onClickOnHandler = (a: boolean) => setOn(a)
        const onClickHandler = (a: boolean) => setOn(a)


        const onlyStyle = {
            display: "flex",
            gap: "10px",
            alignItems: "center",
        }

        const onStyle = {

            width: "60px",
            height: "60px",
            backgroundColor: on ? "green" : "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "700",
            border: "2px solid black",
            cursor: "pointer"
        }
        const ofStyle = {
            width: "60px",
            height: "60px",
            backgroundColor: !on ? "red" : "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "700",
            border: "2px solid black",
            cursor: "pointer"
        }
        const indicatorStyle = {

            width: "30px",
            height: "30px",
            borderRadius: "15px",
            border: "1px solid black",
            backgroundColor: on ? "green" : "red"
        }
        return (
            <div style={onlyStyle}>
                <div style={onStyle} onClick={() => onClickHandler(true)}>ON</div>
                <div style={ofStyle} onClick={() => onClickHandler(false)}>OFF</div>
                <div style={indicatorStyle}></div>
            </div>
        );
    }
;



