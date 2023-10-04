import { Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Typography from "@mui/material/Typography";

import SearchAppBar from "./NavBar";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
function RegistrationContainer() {

  
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  



  const [name, setName] = React.useState('');
  
	const [num1, setNum] = React.useState('');
  
	const [num2, setAltNum] = React.useState('');
  
	const [email1, setEmail] = React.useState('');
  
	const [email2, setAltEmail] = React.useState('');
  
	const [pass, setPass] = React.useState('');

  const [aadhaar, setAadhaar] = React.useState('');

  const [profilepic, setProfilePic] = React.useState('');

	const handleName = (name) => {
		setName(name);
	};

	const handleNum1 = (num1) => {
		setNum(num1);
	};

	const handleNum2 = (num2) => {
		setAltNum(num2);
	};

	const handleEmail = (email1) => {
		setEmail(email1);
	};

	const handleAltEmail = (email2) => {
		setAltEmail(email2);
	};

	const handlePass = (pass) => {
		setPass(pass);
	};

  const handleAadhaar = (aadhaar) => {
    setAadhaar(aadhaar);
  };

  const handleProfilePic = (profilepic) => {
    setProfilePic(profilepic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const data = new FormData();
    data.append('registeree',regtype)
    data.append("addiction",addiction)
    data.append("address",address)
    data.append("state",state)
    data.append("bloodgroup",bloodtype)
    data.append("aadharimg",aadhaar)
    data.append("profilepic",profilepic)
    data.append('username',name)
    data.append("no",num1)
    data.append("altno",num2)
    data.append("email",email1)
    data.append("altemail",email2)
    data.append("password",pass)
    data.append("gender",gender)

    for (var pair of data.entries())
      {
        console.log(pair[0]+ ', '+ pair[1]); 
      }

      axios.post('http://127.0.0.1:8000/authen/register/',data,{
      headers: {
          
          'Content-Type': 'multipart/form-data'
      }})
    .then(response => console.log(response))
    .catch(err => console.log(err))






  }

  const [regtype, setRegType] = React.useState('');

  const handleChange = (regtype) => {
    setRegType(regtype);
  };

  const [bloodtype, setBloodType] = React.useState('');
  
    const handleChangeBlood = (bloodtype) => {
      setBloodType(bloodtype);
    };

  const [addiction, setAddiction] = React.useState('');

  const handleChangeAddiction = (addiction) => {
    setAddiction(addiction);
  };

  const [address, setAddress] = React.useState('');

  const handleChangeAddress = (address) =>{
    setAddress(address);
  };

  const [state, setState] = React.useState('');
  
    const handleChangeState = (state) => {
        setState(state);
    };

    const [gender, setGender] = React.useState('')

    const handleGender = (gender) => {
        setGender(gender);
    }

    return(
        <Container component='form' sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2, backgroundColor: '#ffffff', borderRadius: '10px', border: '2px solid black' }} onSubmit={(event) => handleSubmit(event)}>
            
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Registering For</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={regtype}
                  label="Registering For"
                  onChange={(e) => handleChange(e.target.value)}
                >
                  <MenuItem value={'Self'}>Self</MenuItem>
                  <MenuItem value={'Family'}>Family</MenuItem>
                  <MenuItem value={'Relative'}>Relative</MenuItem>
                </Select>
              </FormControl>
            </Box>
  
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField id="name-field" label="Name" variant="outlined" onChange={(e) => handleName(e.target.value)}/>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField id="number-field" label="Number" variant="outlined" onChange={(e) => handleNum1(e.target.value)}/>
                        <TextField id="altnumber-field" label="Alternate Number" variant="outlined" onChange={(e) => handleNum2(e.target.value)}/>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField id="email-field" label="Email ID" variant="outlined" onChange={(e) => handleEmail(e.target.value)}/>
                        <TextField id="altemail-field" label="Alternate Email ID" variant="outlined" onChange={(e) => handleAltEmail(e.target.value)} />
                    </Box>
                </Box>
                <Box>
                    <div>
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                            className="rounded-circle" alt="example placeholder" style={{width: '25%'}} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary btn-rounded">
                                <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                <input type="file" className="form-control d-none" id="customFile2" onChange={(e) => handleProfilePic(e.target.files[0])}/>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
            
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Addiction Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={addiction}
                  label="Addiction Type"
                  onChange={(e) => handleChangeAddiction(e.target.value)}
                >
                  <MenuItem value={'Drugs'}>Drugs</MenuItem>
                  <MenuItem value={'Alcohol'}>Alcohol</MenuItem>
                  <MenuItem value={'Others'}>Others</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
                onChange={(e) => handleChangeAddress(e.target.value)}
                placeholder="Address (Max Length: 200)"
            />
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Attach Photo of Aadhaar Card</label>
                <input className="form-control" type="file" id="formFile" onChange={(e) => handleAadhaar(e.target.files[0])}/>
            </div>
            
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="State"
                  onChange={(e) => handleChangeState(e.target.value)}
                >
                  <MenuItem value={'Maharashtra'}>Maharashtra</MenuItem>
                  <MenuItem value={'Goa'}>Goa</MenuItem>
                  <MenuItem value={'Kerala'}>Kerala</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={bloodtype}
                  label="Registering For"
                  onChange={(e) => handleChangeBlood(e.target.value)}
                >
                  <MenuItem value={'A+'}>A+</MenuItem>
                  <MenuItem value={'A-'}>A-</MenuItem>
                  <MenuItem value={'B+'}>B+</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group" 
                onChange={(e) => handleGender(e.target.value)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <TextField id="pass-field" label="Password" variant="outlined" onChange={(e) => handlePass(e.target.value)} />

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2}}>
                <Button variant="contained" color='success' type='submit'>Submit</Button>
                <Button variant="contained" color='error' type='reset'>Reset</Button>
            </Box>

        </Container>
    )
}

export default function RegistrationPage() {
    return(
        <>
            <SearchAppBar/>
            <Container maxWidth={false} sx={{ padding: 2, backgroundColor: '#bae0fc'}}>
                <Typography variant="h5" align="center" fontWeight='bold' sx={{ mb: 2 }}>NMBA Registration</Typography>
                <RegistrationContainer/>
            </Container>
        </>
    );
}