'use client';

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { signIn } from "@/firebase/auth/traditionalAuth";
import { signInWithGooglePopup } from "@/firebase/auth/googleAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

import NavBar from '@/components/NavBar';
import Carrusel from '@/components/Carrusel';
import PiePag from '@/components/PiePag';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = async () => {
        const { result, error } = await signIn(email, password);
        if (error) {
            setError(error.message);
            return;
        }
        // Redirigir a la página de usuario después de iniciar sesión
        router.push('/User');
    };

    const handleSignInWithGoogle = async () => {
        const { result, error } = await signInWithGooglePopup();
        if (error) {
            setError(error.message);
            return;
        }
        // Redirigir a la página de usuario después de iniciar sesión con Google
        router.push('/User');
    };

    useEffect(() => {
        const auth = getAuth(firebase_app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Redirigir a la página de usuario si ya está autenticado
                router.push('/User');
            }
        });
    }, [router]);

    return (
        <body>  
            <NavBar />
            <Carrusel />
            <Box sx={{ height: '800px', margin:'20vh' }}>
                <Paper elevation={3} sx={{ p: 3, maxWidth: 300, mx: 'auto', mt: 5 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>Iniciar sesión</Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <TextField
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleSignIn}
                    >
                        Iniciar sesión
                    </Button>
                    <Button
                        startIcon={<GoogleIcon />}
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleSignInWithGoogle}
                    >
                        Inicia sesión con Google
                    </Button>
                    <Typography component="p" sx={{ mt: 2 }}>
                        ¿No tienes una cuenta?
                        <Typography color="primary" component={Link} href="/signup">Regístrate</Typography>
                    </Typography>
                </Paper>
            </Box>
            <PiePag />
        </body>
    );
}
