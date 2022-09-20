import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


export default function Student(){

  const[id,setId] = useState();
  const[name,setName] = useState();
  const[address,setAddress] = useState();
  const{studentId} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(studentId !== null){
      axios.get('http://localhost:8080/student/'+studentId)
      .then(response => {
        setId(response.data.id);
        setName(response.data.name);
        setAddress(response.data.address);
      })
    .catch(error => alert(error));
    }
  },[])
  
  const student={
    id:id,
    name: name,
    address: address
  }

  let textChanged = (event) => {
    if(event.target.name ==='id'){
      setId(event.target.value);
    }else if(event.target.name ==='name'){
      setName(event.target.value);
    }else if(event.target.name ==='address'){
      setAddress(event.target.value);
    }
  }

  let addStudent = (event) =>{
    event.preventDefault();
    if(studentId===null){
    axios.post('http://localhost:8080/student',student)
    .then(response => {alert(response.data)})
    .catch(error => alert(error));
    }else
    {
      axios.put('http://localhost:8080/student/'+studentId,student)
      .then(response => {alert(response.data)})
      .catch(error => alert(error));
    }
    setId('');
    setName('');
    setAddress('');
  }
  return (
    <div className='my-3'>
        <Card>
            <Card.Header>Add Student Information</Card.Header>
        
    <Form onSubmit={addStudent}>
        <Card.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Studnet Id</Form.Label>
        <Form.Control name="id" value={id} type="text" placeholder="Enter Id" onChange={textChanged} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Studnet Name</Form.Label>
        <Form.Control name="name" value={name} type="text" placeholder="Enter Name" onChange={textChanged}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Studnet Address</Form.Label>
        <Form.Control name="address" value={address} type="text" placeholder="Enter Address" onChange={textChanged}/>
      </Form.Group>
      </Card.Body>

      <Card.Footer>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Footer>
    </Form>
    </Card> 
    </div>
  )
}
