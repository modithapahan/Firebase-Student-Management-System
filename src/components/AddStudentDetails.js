import React, { useState } from 'react'
import { db } from '../firebase-config'
import { collection,addDoc } from 'firebase/firestore'

const AddStudentDetails = () => {

    const [newName, setNewName] = useState();
    const [newAge, setNewAge] = useState();
    const [newGender, setNewGender] = useState();

    const userCollectionRef = collection(db, "students");

    const createStudent = async () => {
        await addDoc(userCollectionRef, { name: newName, age: Number(newAge), gender: newGender})
    }

  return (
      <div style={{margin: '40px'}}>
        <form style={{ width: '50%', margin: 'auto'}}>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Enter Name'
                   onChange={(event)=> {setNewName(event.target.value)}} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputAge" className="form-label">Age</label>
                  <input type="number" className="form-control" id="exampleInputAge" placeholder='Enter Age'
                    onChange={(event) => {setNewAge(event.target.value)}} />
            </div>
             <div className="mb-3">
                <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                  <input type="text" className="form-control" id="exampleInputGender" aria-describedby="genderHelp" placeholder='Enter Gender'
                    onChange={(event) => {setNewGender(event.target.value)}} />
            </div>
            <button type="submit" className="btn btn-primary"  style={{ width: '50%', marginLeft: '145px'}} onClick={createStudent}>Submit</button>
        </form>
    </div>
  )
}

export default AddStudentDetails
