import {memo, useCallback, useMemo, useState} from "react";
import {number} from "prop-types";

export default {
    title: "useMemo"
}

export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(Number(e.currentTarget.value))
        }}/>
        <hr/>
        <div>
            result a : {resultA}
        </div>
        <div>
            result b : {resultB}
        </div>

    </>
}
const UsersSecret = (props: { users: string[] }) => {
    console.log("users")
    return <div>{props.users.map((i, index) => <div key={index}>{i}</div>)}</div>
}

const Users = memo(UsersSecret)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["krot", "enot", "banan"])

    const newArray = useMemo(() => {
        return users.filter(e => e.toLowerCase().indexOf("o") > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}


////////////////////////////////////////////////////////// USE CALLBACK
export const LikeUseCallback = () => {
    console.log("likeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS"])

    // мемоизируем фукцию, чтобы она не вызывалась если не меняются books

    // const memoAddBook = useMemo(() => {
    //     return () => {
    //         const copy = [...books, "HTML" + new Date().getTime()]
    //         setBooks(copy)
    //     }
    // }, [books])

    // мемоизируем фукцию с помощью хука UseCallback, чтобы она не вызывалась если не меняются books

    const memoAddBook = useCallback(() => {
        const copy = [...books, "HTML" + new Date().getTime()]
        setBooks(copy)
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoAddBook}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("books")
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Book = memo(BooksSecret)
