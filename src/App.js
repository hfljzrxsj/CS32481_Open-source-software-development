import logo from './logo.svg';
import './App.css';
import { Autocomplete, TextField ,Slider,Box,ButtonGroup,Button } from '@mui/material';
import { useState } from 'react';
const options = [{ label: 'The Godfather', id: 1 }, { label: 'Pulp Fiction', id: 2 },];
function App() {
  // 第一个组件的数据
  const [selected,setSelected]=useState();
  // 第二个组件的数据
  const [value,setValue]=useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // 第三个组件的数据
  const [clickTime,setclickTime]=useState([0,0,0]);
  // 处理按钮点击事件
  const handleClick=(btn_index)=>{
    //console.log(btn_index)
    setclickTime(clickTime.map((item,index)=>{
      if(btn_index==index)
        return item+1
      else
        return item
    }))
  }

  return (
    <div className="App">
      <div className='home-work'>
        <div className="content">
          <h1 className='title'>HomeWork</h1>
          <div className='author'>
            <div>陈帆</div><div>2021112946</div>
          </div>
          <main className='list'>
            {/* 组件 1 */}
            <div className="item">
               组件 Autocomplete
              <Autocomplete
                value={selected}
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="选择" />} 
                onChange={(event, newInputValue) => {
                  // 在这里拒绝不合法的输入，并发出报错
                  if(newInputValue!=null&&newInputValue.id==2) {
                    alert("the selection cant be selected");
                  }
                  else setSelected(newInputValue);
                }}
              />
              当前选择：{selected!=null&&selected.id?'id:'+selected.id+' ,label:'+selected.label:"未选择"}
            </div>
            {/* 组件 2 */}
            <div className="item">
              组件 Slider
              <Box sx={{ width: 200 }}>
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
              </Box>
              当前数值：{value||'未选择'}
            </div>
            {/* 组件 3 */}
            <div className="item">
              组件 Button Group
              <ButtonGroup size="large" aria-label="large button group">
                <Button key="one" onClick={()=>{return handleClick(0)}}>One</Button>
                <Button key="two" onClick={()=>{return handleClick(1)}}>Two</Button>
                <Button key="three" onClick={()=>{return handleClick(2)}}>Three</Button>
              </ButtonGroup>
              点击次数：{clickTime[0]},{clickTime[1]},{clickTime[2]}
            </div>
            <div className="item readme">
              <div className='readme_heading'>说明</div>
              <p>使用函数式组件，并使用React Hooks引入组件的属性。AutoCompelete选中非法数据时，报错并拒绝数值的变化。在设备宽度1200px处设有媒体查询断点。</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
