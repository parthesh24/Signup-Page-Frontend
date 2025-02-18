import React, { useCallback, useEffect } from 'react'
import { useState } from "react";
import { 
    Card, CardContent, TextField, Button, Box,
    InputLabel,
    FormLabel, 
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";


const Credentials = () => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatePassword = useCallback(() => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            setError("Password must contain at least 8 characters, including uppercase, lowercase letters, and numbers");
        } else {
            setError("");
        }
      },[formData.password]);

    const handleSubmit = (e) => {
      validatePassword()
      if(error===""){
        if(formData.password !== formData.confirmPassword){
            alert("Passwords do not match");
        }
        else{
            e.preventDefault();
            navigate('/success');
        }
      }
    };

    useEffect(() => {
      validatePassword()
    },[validatePassword])
  return (
        <Card sx={{ width: "100%", maxWidth: 500, mt: 4,mb:4, p: 2, boxShadow: 3 }}>
                        <FormLabel component="legend" sx={{fontWeight: 'bold', fontSize: '2.0rem'}}>Create Password</FormLabel>
                        <CardContent>
                          <form onSubmit={handleSubmit}>
                            <Box display="flex" flexDirection="column" gap={2}>
                              
                              <TextField 
                                label="Enter Password" 
                                type="password" 
                                name="password" 
                                value={formData.password} 
                                onChange={validatePassword}
                                onInput={handleChange}
                                required 
                                fullWidth 
                              />

                              {error !== "" && <InputLabel style={{ color: "red" }}>{error}</InputLabel>}

                              <TextField 
                                label="Confirm Password"
                                type="password" 
                                name="confirmPassword" 
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                required 
                                fullWidth 
                              />
                
                              <Button 
                                type="submit" 
                                variant="contained" 
                                bgsx={{bgcolor:"#000086"}} 
                                fullWidth
                              >
                                Sign Up
                              </Button>
                
                            </Box>
                          </form>
                        </CardContent>
                      </Card>
  )
}

export default Credentials