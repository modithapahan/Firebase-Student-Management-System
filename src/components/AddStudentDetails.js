import React from 'react'

const AddStudentDetails = () => {
  return (
      <div style={{margin: '40px'}}>
        <form style={{ width: '50%', margin: 'auto'}}>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputAge" class="form-label">Age</label>
                <input type="number" class="form-control" id="exampleInputAge" />
            </div>
             <div class="mb-3">
                <label for="exampleInputGender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="exampleInputGender" aria-describedby="genderHelp" />
            </div> 
            <button type="submit" class="btn btn-primary"  style={{ width: '50%', marginLeft: '140px'}}>Submit</button>
        </form>      
    </div>
  )
}

export default AddStudentDetails