import React from 'react'
import { useState } from "react";
import { 
    Card, CardContent, TextField, Button, Box,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormLabel, 
  } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrganizationDetails = () => {
    const [formData, setFormData] = useState({
        organizationName: "Blue Altair",
        capabilityName: "",
        baseLocation: "",
        careerManager: "",
        
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/credentials', { state: formData });
      };
  return (
        <Card sx={{ width: "100%", maxWidth: 500, mt: 4, mb:4, p: 2, boxShadow: 3 }}>
          <FormLabel component="legend" sx={{fontWeight: 'bold', fontSize: '2.0rem'}}>Organization Details</FormLabel>
                        <CardContent>
                          <form onSubmit={handleSubmit}>
                            <Box display="flex" flexDirection="column" gap={2}>
                              
                              <TextField 
                                label="Organization Name" 
                                type="text" 
                                name="organizationName" 
                                value={formData.organizationName} 
                                onChange={handleChange} 
                                required 
                                fullWidth 
                                defaultValue={formData.organizationName}
                              />

                              <FormControl>
                              <InputLabel>Capability Name</InputLabel>                                 
                              <Select
                                label="Select Capability"
                                name="capabilityName" 
                                value={formData.capabilityName} 
                                onChange={handleChange} 
                                required 
                                fullWidth
                                sx={{textAlign: 'left'}}
                              >
                                <MenuItem value={"clientSuccess"}>Client Success</MenuItem>
                                <MenuItem value={"apiManagement"}>API Management</MenuItem>
                                <MenuItem value={"dataManagement"}>Data Management</MenuItem>
                                <MenuItem value={"dataScienceAndAi"}>Data Science and AI</MenuItem>
                                <MenuItem value={"digitalApplicationDevelopment"}>Digital Application Development</MenuItem>
                                </Select>
                              </FormControl>
                
                              <TextField 
                                label="Base Location" 
                                type="text" 
                                name="baseLocation" 
                                value={formData.baseLocation} 
                                onChange={handleChange} 
                                required 
                                fullWidth 
                              />
                
                              <TextField
                              label="Career Manager"
                              type="text"
                              name="careerManager"
                              value={formData.careerManager}
                              onChange={handleChange}
                              required
                              fullWidth
                              />
    
                              <TextField
                              label="Country"
                              type="text"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              required
                              fullWidth
                              />
                
                              <Button 
                                type="submit" 
                                variant="contained" 
                                sx={{bgcolor:"#000086"}} 
                                fullWidth
                              >
                                Next
                              </Button>
                
                            </Box>
                          </form>
                        </CardContent>
                      </Card>
  )
}

export default OrganizationDetails