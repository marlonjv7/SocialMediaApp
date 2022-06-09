import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Get from '../helpers/get';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const Search = () => {
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


// Inicio del componente de función que pinta los avatares de los usuarios y sus publicaciones


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
        <div>
            <Stack direction="row" spacing={2}>
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
                        post.map((item) => (
                            <Card sx={{ maxWidth: 345, margin: '1em' }} key={item.id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.image}
                                        alt="imagen"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.comentario}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))
                    ) : <>Loading...</>
                }
            </div>
        </div>
    )
}

export default Search