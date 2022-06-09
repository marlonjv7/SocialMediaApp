import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Get from '../helpers/get';
import { IMG3, SECTION, TEXT } from '../styles/StylesGlobales';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


//Funciones exportadas de material Ui

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: 'ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
      },
  },
  '@keyframes ripple': {
      '0%': {
          transform: 'scale(.8)',
          opacity: 1,
      },
      '100%': {
          transform: 'scale(2.4)',
          opacity: 0,
      },
  },
}));

const Main = () => {

  const urlUser = 'https://workshop-2-ag.herokuapp.com/users'
    const urlPublicaciones = 'https://workshop-2-ag.herokuapp.com/publicaciones'

    const [usuario, setUsuario] = useState([])
    const [post, setPost] = useState([])


    const cargar = async () => {
        const resp = await Get(urlUser)
        const respPost = await Get(urlPublicaciones)
        setUsuario(resp)
        setPost(respPost)
    }
    useEffect(() => {
        cargar()
    }, [])

  return (
    <div className='d-flex flex-column'>
      <section className='d-flex mt-3'>
        <div>
          <img className='my-auto ms-4' src="https://i.ibb.co/kHHzYGM/LOGOLOGO-3.png" alt="" />
        </div>
        <div className='ms-auto me-3 d-flex gap-3'>
          <img className='my-auto' src="https://i.ibb.co/MBcBqxd/Vector.png" alt="" style={{ width: '27px', height: '24px' }} />
          <img className='my-auto' src="https://i.ibb.co/qjT0QQk/Vector-2.png" alt="" style={{ width: '24px', height: '24px' }} />
        </div>
      </section>

      <Stack direction="row" sx={{diplay:'flex', justifyContent: 'space-evenly', marginTop:'1em'}}>
                {
                    usuario && usuario.length > 0 ? (
                        usuario.map(item => (
                            <StyledBadge key={item.id}
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src={item.photo} />
                            </StyledBadge>
                        ))
                    ) : <>Loading...</>
                }
            </Stack>

      <div>
        {
          post && post.length > 0 ? (
            post.map((item) => {
              const userPost = usuario.find(u=> u.id === item.idUser)
              return (
                <SECTION className='mx-auto d-flex flex-column p-3 mb-3' key={item.id}>
                  <div className='d-flex ms-2'>
                    <IMG3 src={userPost ? userPost.photo: "userX"} alt="" />
                    <h2 className='fs-5 ms-2'>{userPost ? userPost.name: "userX"}</h2>
                  </div>
                  <div className=''>
                    <TEXT className='' >
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <div className='d-flex gap-3'>
                          <div className='d-block'>
                            <img className='mx-1' src="https://i.ibb.co/MBcBqxd/Vector.png" alt="" />
                            <h2 className='fs-6'>300K</h2>
                          </div>
                          <div className='d-block'>
                            <img className='' src="https://i.ibb.co/JrX80Zh/Vector-4.png" alt="" />
                            <h2 className='fs-6'>87K</h2>
                          </div>
                          <div className='d-block'>
                            <img className='' src="https://i.ibb.co/QPPWMhF/Vector-5.png" alt="" />
                            <h2 className='fs-6'>10K</h2>
                          </div>
                          <div className='d-block ms-auto'>
                            <img className='mx-1' src="https://i.ibb.co/sqf9Lhs/Vector-11.png" alt="" />
                            <h2 className='fs-6'>10K</h2>
                          </div>
                        </div>
                        <TEXT.Text>
                          <span className='fs-2'>{userPost ? userPost.name: "userX"}</span>
                          <p>{item.comentario}</p>
                        </TEXT.Text>
                      </Card.Body>
                    </TEXT>
                  </div>
                </SECTION>
              )
            })
          ) : <>Loading...</>
        }
      </div>

      <NavBar />
    </div>
  )
}

export default Main;