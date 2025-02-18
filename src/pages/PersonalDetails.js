import React, { useState } from "react";
import { 
  Card, CardContent, TextField, Button, Box, 
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        gender: "",
        bloodGroup: "",
        DOB: "",
        placeOfBirth: "",
        permanentAddress: "",
        city: "",
        state: "",
        country: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
        emergencyContactRelationship: ""
    });
    const navigate = useNavigate();
    const emergencyContactNumberRegex = /^[0-9]{10}$/;

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleEmergencyContactNumber = (e) => {
        if(!emergencyContactNumberRegex.test(e)){
          alert("Please enter a valid Emergency Contact Number");
          return false;
        }
        return true
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(handleEmergencyContactNumber(formData.emergencyContactNumber)){
        navigate('/organization-details', { state: formData });
        }
      };
      
  return (

        <Card sx={{ width: "100%", maxWidth: 500, mt: 4, mb:4, p: 2, boxShadow: 3 }}>
          <FormLabel component="legend" sx={{fontWeight: 'bold', fontSize: '2.0rem'}}>Personal Details</FormLabel>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2}>
                      <FormControl>
                        <InputLabel>Gender</InputLabel>
                      <Select 
                        label="Select Gender"  
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange} 
                        required 
                        fullWidth
                        sx={{textAlign: 'left'}}
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                        <MenuItem value={"other"}>Other</MenuItem>
                      </Select>
                      </FormControl>

                      <FormControl>
                        <InputLabel>Blood Group</InputLabel>
                      <Select 
                        label="Select Blood Group"  
                        name="bloodGroup" 
                        value={formData.bloodGroup} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                        sx={{textAlign: 'left'}}
                      >
                        <MenuItem value={"B+"}>B+</MenuItem>
                        <MenuItem value={"B-"}>B-</MenuItem>
                        <MenuItem value={"A+"}>A+</MenuItem>
                        <MenuItem value={"A-"}>A-</MenuItem>
                        <MenuItem value={"O+"}>O+</MenuItem>
                        <MenuItem value={"O-"}>O-</MenuItem>
                        <MenuItem value={"AB+"}>AB+</MenuItem>
                        <MenuItem value={"AB-"}>AB-</MenuItem>
                      </Select>
                      </FormControl>

                      <TextField 
                        label="Date of Birth"
                        InputLabelProps={{ shrink: true }}
                        type="date" 
                        name="DOB" 
                        value={formData.DOB} 
                        onChange={handleChange} 
                        required 
                        fullWidth
                      />
        
                      <TextField 
                        label="Place of Birth" 
                        type="text" 
                        name="placeOfBirth" 
                        value={formData.placeOfBirth} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                      />
        
                      <TextField 
                        label="Permanent Address"
                        type="text" 
                        name="permanentAddress" 
                        value={formData.permanentAddress} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                      />
        
                      <TextField 
                        label="City" 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                      />
        
                      <TextField
                      label="State"
                      type="text"
                      name="state"
                      value={formData.state}
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

                      <TextField
                      label="Emergency Contact Name"
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      required
                      fullWidth
                      />

                      <TextField
                      label="Emergency Contact Number"
                      type="text"
                      name="emergencyContactNumber"
                      value={formData.emergencyContactNumber}
                      onChange={handleChange}
                      required
                      fullWidth
                      />

                      <TextField
                      label="Emergency Contact Relationship"
                      type="text"
                      name="emergencyContactRelationship"
                      value={formData.emergencyContactRelationship}
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

export default PersonalDetails