import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { Link } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "students");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
  }

  return (
    <div className="container" style={{marginTop: "30px"}}>
      <table className="table" style={{ width: "60%", margin: "auto" }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user}>
                <td scope="row">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                
                <Link to={`/view/${user.id}`} style={{ margin: "0px" }}>
                  <button className="btn btn-outline-warning">View</button>
                </Link>
                
                <Link to={`/update/${user.id}`} style={{ margin: "0px" }}>
                  <button className="btn btn-outline-primary" style={{ margin: "2px" }}>Update</button>
                </Link>
              
                <button className="btn btn-outline-danger"
                  style={{ margin: "5px", height: "37px" }}
                  onClick={() => handleDelete(user.id)}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home
