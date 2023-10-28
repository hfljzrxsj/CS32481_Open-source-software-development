import * as React from 'react';
import { Autocomplete ,TextField,Checkbox,FormGroup,FormControlLabel,Button,ButtonGroup,Box} from '@mui/material';
import './App_201924110104.css'
const options = [{ label: 'The Godfather', id: 1 },{ label: 'Pulp Fiction', id: 2 },]; //Autocomplete选项数组

function App() {

    const [selectedOption, setSelectedOption] = React.useState(null);   //定义状态变量

    const handleSelectionChange = (event,value) => {
        setSelectedOption(value);  //更新状态
        if (value?.label === 'Pulp Fiction') {      //判断是不是禁止选的选项
          alert('The selection can\'t be selected');
        } //定义选到第二个选项触发的函数
    }

    return (
    <div className="App">

     {/* Autocomplete组件 */}
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      onChange={handleSelectionChange}//用onchange触发事件
      renderInput={(params) => <TextField {...params} label="Movie" />}
      />

      {/* Checkbox组件 */}
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="富强" />
      <FormControlLabel required control={<Checkbox />} label="民主" />
      <FormControlLabel disabled control={<Checkbox />} label="和谐" />
      </FormGroup>

     {/* ButtonGroup组件 */}
     <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <Button label="H" >H</Button>
     <Button label="I" >I</Button>
     <Button label="T" >T</Button>
     </ButtonGroup>

     {/* TextField组件 */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      id='boxUser'
    >
      <TextField 
        id="textUser" 
        label="账户名" 
        variant="outlined" 
        />

    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      id='boxPswd'
    >
      <TextField 
        id="testPswd" 
        label="密码" 
        variant="outlined" 
        />

    </Box>
      
    </div>
  );
}

export default App;
