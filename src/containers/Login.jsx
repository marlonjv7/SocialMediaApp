import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import NavBarTop from '../components/NavBarTop';

export const Login = () => {
    const getDataUser = async () => {
        const { data } = await axios.get(urlUser)
        setUser(data);
    }

    const [values, setValues] = useState("")
    const handleChange = ({ target }) =>
        setValues(
            getDataUser()
            [target.name] = target.value
        )
    const url = "https://workshop-2-ag.herokuapp.com/publicaciones";
    const urlUser = "https://workshop-2-ag.herokuapp.com/users"
    const [login, setLogin] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(url)
        setLogin(data);
    }
    const [user, setUser] = useState([]);

    const userInit = user.filter(u => u.email == values)
    console.log(userInit)
    console.log(values)
    const infoUser = login.filter(p => p.idUser == userInit.id)
    console.log(infoUser)

    return (
        <div>
            <NavBarTop />
            <div className='h-100' style={{ textAlign: "center" }}>
                <img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1654804837/LOGOLOGO_3_kfjjph.png" />
                <h1 style={{ color: "#EB5E5C" }}>Create account</h1>
                <Form style={{ width: "50vw", marginLeft: "25vw" }}>
                    <InputGroup hasValidation>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control name="email" onChange={handleChange} type="text" />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Passoword</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Button style={{ backgroundColor: "#EB5E5C", border: "none" }} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>

    )
}
