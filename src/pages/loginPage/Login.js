import React, {useState} from "react";
// import { Form, Row, Col, FormCheck, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Login.css'
import http from "../../services/http";
import { useDispatch } from "react-redux";
import { triggerLoader } from "../../redux/reducers/LoaderTrigger";

import { Box,Typography, Container, TextField, Link, FormControlLabel, Grid, Checkbox, Button, CircularProgress } from "@mui/material";

const Login = () => {

    const [formData, setFormData] = useState({})

    const navigate = useNavigate();
    const dispatch = useDispatch()

    // to fetch data from text box
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData((state)=>({
            ...state,
            [name]:value
        }))
    }

    // to handle login
    const handleLogin = async(e) =>{ 
        e.preventDefault()
        dispatch(triggerLoader())
        try{
            const result = await http.post('/api/login',formData)
            if(result.success){
                console.log(result.success)
                localStorage.setItem('token',result.success.token)
                localStorage.setItem('user_id',result.success.customerId)
                dispatch(triggerLoader())
                navigate('/Dashboard', {replace:true})
            }
        }catch(err){
            console.log("Login Failed")
        }
    }

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />


                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>


                        {/* <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid> */}

                    </Box>
                </Box>
            </Container>
        </>
    );
};
export default Login;