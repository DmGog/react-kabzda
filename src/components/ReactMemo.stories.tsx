import {memo, useState} from "react";

export default {
    title: " ReactMemoDemo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log("users")
    return <div>{props.users.map((i, index) => <div key={index}>{i}</div>)}</div>
}

const Users = memo(UsersSecret)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["krot", "enot", "banan"])

    const addUser = () => {
        const copy = [...users, "baron" + new Date().getTime()]
        setUsers(copy)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

