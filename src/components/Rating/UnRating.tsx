import React, {useState} from "react";

// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function UnRating() {
    console.log("Rating rendering")


    let [rating, setRating] = useState(0)
    /* const onClickHandler = (a: number) => {
         setRating(a)
     }*/


    return (<div>
            {/*   <Star onClick={() => onClickHandler(1)} selected={rating > 0}/>
            <Star onClick={() => onClickHandler(2)} selected={rating > 1}/>
            <Star onClick={() => onClickHandler(3)} selected={rating > 2}/>
            <Star onClick={() => onClickHandler(4)} selected={rating > 3}/>
            <Star onClick={() => onClickHandler(5)} selected={rating > 4}/>*/}

            <Star setRating={setRating} rating = {1} selected={rating > 0}/>
            <Star setRating={setRating} rating = {2} selected={rating > 1}/>
            <Star setRating={setRating} rating = {3} selected={rating > 2}/>
            <Star setRating={setRating} rating = {4} selected={rating > 3}/>
            <Star setRating={setRating} rating = {5} selected={rating > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    onClick?: () => void
    setRating: (rating: 0 | 1 | 2 | 3 | 4 | 5) => void
    rating: 0 | 1 | 2 | 3 | 4 | 5

}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    /*  return <>{props.selected === true ? (<button onClick={props.onClick} className={"button-star"}>★</button>) : (
          <button onClick={props.onClick} className={"button-star"}>☆ </button>)}</>*/

    return <button onClick={() => {
        props.setRating(props.rating)
    }}>{props.selected ? "★" : "☆"}</button>


    // if (props.selected === true) {
    //     return (
    //         <button>★</button>
    //     )
    // } else {
    //     return (
    //         <button>☆ </button>
    //     )
    // }
}