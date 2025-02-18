import React, { useState } from "react";
import { 
  Card, CardContent, TextField, Button, Box,
  FormLabel, 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    employeeId: "",
    title : "",
    mobileNumber: "",
    dateOfJoining: "",
  });
  const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@bluealtair\.com$/;
  const employeeIdRegex = /^[BA]/;
  const mobileNumberRegex = /^[0-9]{10}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmail = (e) => {
    if (!emailRegex.test(e)) {
      alert("Please enter a valid BlueAltair email address");
      return false;
    }
    return true;
  };

  const handleEmployeeId = (e) => {
    if(!employeeIdRegex.test(e)){
      alert("Please enter a valid Employee Id");
      return false;
    }
    return true
  }

  const handleMobileNumber = (e) => {
    if(!mobileNumberRegex.test(e)){
      alert("Please enter a valid Mobile Number");
      return false;
    }
    return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(handleEmail(formData.email) && handleEmployeeId(formData.employeeId) && handleMobileNumber(formData.mobileNumber)){
      navigate("/personal-details", { state: formData });
    }
  };

  return (
    // <Box 
    //   display="flex" 
    //   flexDirection="column" 
    //   alignItems="center" 
    //   minHeight="100vh" 
    //   bgcolor="grey.100"
    // >

      <Card sx={{ width: "100%", maxWidth: 500, mt: 4,mb:4, p: 2, boxShadow: 3 }}>
        <FormLabel component="legend" sx={{fontWeight: 'bold', fontSize: '2.0rem'}}>Account Details</FormLabel>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              
              <TextField 
                label="Official BA Email" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                fullWidth 
              />

              <TextField 
                label="First Name" 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
                fullWidth 
              />

              <TextField 
                label="Last Name" 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
                fullWidth 
              />

              <TextField 
                label="Employee Id" 
                type="text" 
                name="employeeId" 
                value={formData.employeeId} 
                onChange={handleChange} 
                required 
                fullWidth 
              />

              <TextField 
                label="Title" 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required 
                fullWidth 
              />

              <TextField 
                label="Mobile Number" 
                type="text" 
                name="mobileNumber" 
                value={formData.mobileNumber} 
                onChange={handleChange} 
                required 
                fullWidth 
              />
              
              {/* <InputLabel style={{'text-align':'left'}}>Date of Joining</InputLabel> */}
              <TextField
              label="Date of Joining"
              InputLabelProps={{ shrink: true }} 
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
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
    //   </Box>
  );
};

export default AccountDetails;
