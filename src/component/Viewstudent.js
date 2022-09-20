import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Viewstudent() {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/students')
    .then(response=>setStudents(response.data))
    .catch(error=>alert(error));
    
  })
  
  const deleteStudent = (id, event) => {
    event.preventDefault();
    axios.delete('http://localhost:8080/student/'+ id)
    .then(response=> alert(response.data))
    .catch(error=> alert(error));
  }
  return (
    <Card  className='my-3'>
        <Card.Header>Student Management System</Card.Header>
    <div> 
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student)=>
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.address}</td>
          <td><Link to={"/updateStudent/"+student.id}><Button variant="primary"><FontAwesomeIcon icon={faEdit}>Edit</FontAwesomeIcon></Button>{' '}</Link>
          <Button variant="danger" onClick={deleteStudent.bind(this,student.id)}><FontAwesomeIcon icon={faTrash}>Delete</FontAwesomeIcon></Button>{' '}</td>
        </tr>)}
      </tbody>
    </Table>
    </div>
    <Card.Footer> Information of Students</Card.Footer>
    </Card>
  )
}

