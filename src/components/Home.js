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

  const [search, setSearch] = useState('');

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <input
        type="text"
        className="form-control"
        id="exampleInputAge"
        placeholder="Enter the name to search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table" style={{ width: "60%", margin: "8px auto auto auto" }}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>

        <tbody>
          {users.filter((detail) => {
            return search.toLowerCase() == '' ? detail : detail.name.toLowerCase().includes(search)
          }).map((user, index) => {
            return (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>

                <Link to={`/view/${user.id}`} style={{ margin: "0px" }}>
                  <button className="btn btn-outline-warning">View</button>
                </Link>

                <Link to={`/update/${user.id}`} style={{ margin: "0px" }}>
                  <button className="btn btn-outline-primary"style={{ margin: "2px" }}>Update</button>
                </Link>

                <button
                  className="btn btn-outline-danger" style={{ margin: "5px", height: "37px" }}
                  onClick={() => handleDelete(user.id)}>Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home
