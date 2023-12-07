import React, { useEffect, useState } from "react"
import { database } from "../Config";
import { addDoc, collection,getDocs,doc,deleteDoc} from "firebase/firestore";


function AddUsers(){

    const [Surname, SetSname ] = useState([])
    const [Name, SetName] = useState([])
    const [LastName, SetLname] = useState([])

    const [vals, setVals] = useState([])

    const value = collection(database,'users')

    const addUsers = async() => {
        await addDoc(value,{surname:Surname,name:Name,lastname:LastName})
    }
    const handleDelete = async(id) =>{
        const DeleteVal = doc(database,"users",id)
        await deleteDoc(DeleteVal)
    }

    useEffect(() =>{
        const getData = async() => {
            const dbvalue = await getDocs(value)
            setVals(dbvalue.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getData()
    })

    return(
        <>
        <div>
            <input  value={Surname} onChange={(e) => SetSname(e.target.value)} placeholder="Фамилия"></input>
            <input  value={Name} onChange={(e) => SetName(e.target.value)} placeholder="Имя"></input>
            <input  value={LastName} onChange={(e) => SetLname(e.target.value)} placeholder="Отчество"></input>
            <button onClick={addUsers}>Добавить</button>

        </div>

        <div>
            {
                vals.map(values =>
                <div style={{display:"flex"}}>
                    <div style={{padding:"0 10px 0 10px"}}>{values.surname}</div>
                    <div style={{padding:"0 10px 0 10px"}}>{values.name}</div>
                    <div style={{padding:"0 10px 0 10px"}}>{values.lastname}</div>
                    <button onClick={() => handleDelete(values.id)}>Delete</button>
                </div>
                )
            }
        </div>
        </>

    )

}

export default AddUsers