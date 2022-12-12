import React, { useState } from 'react'
import { db } from '../firebase-config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const AddStudentDetails = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();

    if (name || age || gender !== "") {
      await addDoc(collection(db, "students"), {
        name,
        age,
        gender,
        completed: false,
        created: Timestamp.now(),
      });
      setName("")
      setGender("")
      setAge("")
    }
    else {
      alert('Please fill the details');
    }
  }

  return (
      <div style={{margin: '40px'}}>
      <form style={{ width: '50%', margin: 'auto' }}>
        
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input type="text"
                      className="form-control"
                      id="exampleInputName"
                      name="name"
                      placeholder='Enter Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
            </div>
        
            <div className="mb-3">
                <label htmlFor="exampleInputAge" className="form-label">Age</label>
                <input type="number"
                      className="form-control"
                      id="exampleInputAge"
                      placeholder='Enter Age'
                      name='age'
                      value={age}
                      onChange={(e) => setAge(e.target.value)} />
            </div>
        
            <div className="mb-3">
                <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                <input type="text"
                      className="form-control"
                      id="exampleInputGender"
                      aria-describedby="genderHelp"
                      placeholder='Enter Gender'
                      name='gender'
                      value={gender}
                      onChange={(e) => setGender(e.target.value)} />
            </div>
        
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '50%', marginLeft: '145px' }}
              onClick={onsubmit}>Submit
            </button>
            
        </form>
    </div>
  )
}

export default AddStudentDetails
