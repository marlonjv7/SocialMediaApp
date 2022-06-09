import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';



export const Register = () => {
   
    const url= "https://workshop-2-ag.herokuapp.com/users";
    const [values, setValues] = useState({
        "id":"",
        "name":"",
        "email":"",
        "passoword":"",
        "photo":"",
        
      });
     
      const handleChange = ({target})=> setValues({
          ...values,
          [target.name]: target.value
          
        
        })
        
      const handleSubmit = async() => {
              try{
            await axios.post(url,values)
            }
        catch (error){
            console.log(error)
         }
        
      };


  return (
      <div style={{textAlign:"center"}}>
           <img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1654804837/LOGOLOGO_3_kfjjph.png" />
          <h1 style={{color:"#EB5E5C"}}>Create account</h1>
                   <Form style={{width:"50vw",marginLeft:"25vw"}}>
              <Form.Group className="mb-3" htmlFor="basic-url">
                  <Form.Label>Profile Picture </Form.Label>
                  <Form.Control name="photo" onChange={handleChange} type="url" placeholder="Enter Url " />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Name</Form.Label>
                  <Form.Control name="name" onChange={handleChange} as="textarea" rows={1} />
              </Form.Group>
            <InputGroup hasValidation>
                <InputGroup.Text>@</InputGroup.Text>
                   <Form.Control  name="email" onChange={handleChange} type="text" required isInvalid />
                     
             </InputGroup>
                           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Passoword</Form.Label>
                  <Form.Control name="passoword" onChange={handleChange} as="textarea" rows={1} />
              </Form.Group>
              
              <Button style={{backgroundColor:"#EB5E5C",border:"none"}} variant="primary" onClick={handleSubmit} type="submit">
                  Register
              </Button>
          </Form>
      </div>
  )
}
