import * as React from 'react';
import { useCallback, useState } from 'react';
import AddInfo from '../../components/AddInfo';
import InfoTable from '../../components/InfoTable';


export default function ProfilePage(){
    // Work with obj
    // useCallback
    const [data, setData] = useState([
        {
            id: 1,
            firstName: "abcd",
            lastName: "abcd",
            email: "abc@gmail.com"
        },
        {
            id: 2,
            firstName: "abcd",
            lastName: "abcd",
            email: "hij@gmail.com"
        },

    ])

    const onAdd = useCallback((firstName, lastName, email) => {
        let updateData = [...data, {id: data.length+1, firstName: firstName, lastName: lastName, email: email}]
        setData(updateData)
    },[data, setData])

    const onUpdate = useCallback((id, value) => {
        let index = data.findIndex(d => d.id === id)
        if(index !== -1){
            let updateData = [...data.slice(0 ,index), {...data[index], email: value}, ...data.slice(index+1)]
            setData(updateData)
        }
    }, [data, setData])

    const onDelete = useCallback((id) => {
        let updateData = data.filter(d => d.id !== id)
        setData(updateData)
    }, [data, setData])

    
    return(
        <>
            <AddInfo onAdd={onAdd}></AddInfo>
            <InfoTable data={data} onUpdate={onUpdate} onDelete={onDelete}></InfoTable>
        </>

    )
}