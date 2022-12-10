import React, { useState } from 'react'
import { db } from '../firebase-config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

  const initialState = {
     name: "",
     age: "",
     gender: "",
  };
 

const AddStudentDetails = () => {

  const [state, setState] = useState(initialState);

  const { name, age, gender } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const onsubmit = async (e) => {
    try {
      if (!name || !age || !gender) {
        alert('Please Enter all Details');
      } else {
        await addDoc(collection(db, "students"), {
          name: name,
          age: age,
          gender: gender,
          created: Timestamp.now(),
        });
      }
     
    } catch (error) {
      alert(error)
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
                      onChange={handleInputChange} />
            </div>
        
            <div className="mb-3">
                <label htmlFor="exampleInputAge" className="form-label">Age</label>
                <input type="number"
                      className="form-control"
                      id="exampleInputAge"
                      placeholder='Enter Age'
                      name='age'
                      value={age}
                      onChange={handleInputChange} />
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
                      onChange={handleInputChange} />
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
