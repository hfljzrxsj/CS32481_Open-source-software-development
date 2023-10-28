import React from "react";
import './APP_201924100709.css'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function App_201924100709() {

  // Control Autocomplete component
  const options = [{ label: 'The Godfather', id: 1 },{ label: 'Pulp Fiction', id: 2 }]
  const [selectValue, setSelectValue] = React.useState('')
  const [inputValue, setInputValue] = React.useState('')

  // Control the display and disappearance of error prompts
  const [open, setOpen] = React.useState(false)
  // Function to close the error prompts
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="content">
      {/* The header component of the page */}
      <Box sx={{height:"10%"}}>
        <AppBar position="static">
          <Toolbar>
            <Typography 
              variant="h6" component="div" align="center"
              sx={{ 
                flexGrow: 1,
              }}>
              Welcome to Wiley HomeWork
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* The main body component of the page */}
      <Box className="content-main">
        {/* Login Box, Used to fill in login information*/}
        <Box className="content-main-login">
          {/* Autocomplete selection box */}
          <Box className="content-main-login-select">
            <Grid container spacing={0}>
              {/* Used for occupying space */}
              <Grid item xs={2}/>
              <Grid item xs={4} className="content-main-login-label">
                <Typography 
                  variant="subtitle1" component="div" align="justify"
                  sx={{fontSize:"20px"}}>
                  Select:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  value={selectValue}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    if(null != newInputValue && newInputValue === 'Pulp Fiction') {
                      setOpen(true)
                    } else {
                      //更新inputValue和selectValue
                      setInputValue(newInputValue)
                      setSelectValue(newInputValue)
                    }
                  }}
                  size="small"
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: 200 }}
                  renderInput={(params) => <TextField {...params} label="Controllable" />}
                />
              </Grid>
            </Grid>
          </Box>
          {/* Username input box */}
          <Box className="content-main-login-input">
            <Grid container spacing={0}>
              <Grid item xs={1}/>
              <Grid item xs={5} className="content-main-login-label">
                <Typography 
                  variant="subtitle1" component="div" align="justify"
                  sx={{fontSize:"20px"}}>
                  Username:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="username" variant="outlined" size="small"/>
              </Grid>
            </Grid>
          </Box>
          {/* Password input box */}
          <Box className="content-main-login-input">
            <Grid container spacing={0}>
              <Grid item xs={1}/>
              <Grid item xs={5} className="content-main-login-label">
                <Typography 
                  variant="subtitle1" component="div" align="justify"
                  sx={{fontSize:"20px"}}>
                  Password:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="password" variant="outlined" size="small" type="password"/>
              </Grid>
            </Grid>
          </Box>
          {/* Login Button */}
          <Box className="content-main-login-button">
            <Stack spacing={2} direction="row">
              <Button variant="contained">Login</Button>
              <Button variant="contained">Signup</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* The bottom component of the page */}
      <Box sx={{height:"10%"}}>
        <AppBar position="static">
          <Toolbar>
            <Typography 
              variant="h6" component="div" align="center"
              sx={{flexGrow: 1}}>
              贺向东作业
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Error message prompt */}
      {/* "the selection cant be selected" */}
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open} autoHideDuration={6000} 
        onClose={handleClose}>
        <Alert severity="error">the selection cant be selected</Alert>
      </Snackbar>
    </div>
  )
}
