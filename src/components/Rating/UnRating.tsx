import React, {useState} from "react";

type RatingPropsType = {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
    onChange?: (rating: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function UnRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [rating, setRating] = useState(props.defaultValue ? props.defaultValue : 0)

    return (<div>
            <Star setRating={setRating} rating={1} selected={rating > 0}/>
            <Star setRating={setRating} rating={2} selected={rating > 1}/>
            <Star setRating={setRating} rating={3} selected={rating > 2}/>
            <Star setRating={setRating} rating={4} selected={rating > 3}/>
            <Star setRating={setRating} rating={5} selected={rating > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    onClick?: () => void
    setRating: (rating: 0 | 1 | 2 | 3 | 4 | 5) => void
    rating : 0 | 1 | 2 | 3 | 4 | 5


}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <button onClick={() => {
        props.setRating(props.rating)
    }}>{props.selected ? "★" : "☆"}</button>
}