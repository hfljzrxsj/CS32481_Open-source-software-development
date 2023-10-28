import React, { useState } from 'react';
import { Autocomplete, TextField, Button, Snackbar, Rating, Box, Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./App_2021111331.css"

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];


function App() {
  // 组件数据
  const [selectedOption, setSelectedOption] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [age, setAge] = React.useState('');

  // 组件1函数
  const handleOptionSelected = (event, value) => {
    if (value && value.label === 'Pulp Fiction') {
      setSnackbarOpen(true);
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
    }
  };

  // 组件2函数
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // 组件3函数
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='App' id="activity">
      <div className='home_work'>
        <h1 className='title'>HomeWork</h1>
        <div className='author'>
          <div class="hiter" >阮浩麒
          </div>
        </div>

        {/* 组件 1 */}
        <div className="item">
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="Choose a movie" />}
            value={selectedOption}
            onChange={handleOptionSelected}
          /></div>

        {/* 组件 2 */}
        <div className="item">
          <TextField label="Make some comments" />
          <Snackbar
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            message="The selection can't be selected"
            autoHideDuration={3000}
          /></div>

        <br></br>
        {/* 组件 3 */}
        <div className="item">
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Your feeling</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Excellent</MenuItem>
                <MenuItem value={20}>Outstanding</MenuItem>
                <MenuItem value={30}>Good</MenuItem>
                <MenuItem value={40}>Decent</MenuItem>
                <MenuItem value={40}>Mediocre</MenuItem>
                <MenuItem value={40}>Bad</MenuItem>
                <MenuItem value={40}>Terrible</MenuItem>
              </Select>
            </FormControl>
          </Box></div>

        <p>Give a star</p>

        {/* 组件 4 */}
        <div>
          <Stack spacing={1} className="star">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </div>

        {/* 组件 5 */}
        <br />
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <br />

      </div>
    </div>

  );
}

export default App;
