export type StateTypeRating = {
    rating: 0 | 1 | 2 | 3 | 4 | 5
}
export type ActionRatingType = {
    type: string
    payload: 0 | 1 | 2 | 3 | 4 | 5
}
export const reducerRating = (state: StateTypeRating, action: ActionRatingType): StateTypeRating => {
    switch (action.type) {
        case "SET_RATING":
            return {...state, rating: action.payload};
        default:
            throw new Error("not a rating");
    }
}