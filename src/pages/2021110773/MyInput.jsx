import { React, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
export default function MyForm () {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.id === "name") {
      setName(value);
    } else if (event.target.id === "pwd") {
      setPwd(value);
    }
    if (event.target.value === "114514") {
      fetch("https://zj.v.api.aa1.cn/api/wenan-zl/?type=json", {
        "mode": "cors"
      })
        .then(response => response.json())
        .then(json => alert(json.msg));
    }
  };
  const handleClick = () => {
    window.location.href = "http://blog.nng-hrb.buzz/MUI-demo/";
  };
  const handleCancel = () => {
    setName("");
    setPwd("");
  }
  return (

    <Box sx={{ display: "flex", flexDirection: "column" }}
      className="MUI">
      <h3>TextField</h3>
      <TextField label="用户名" variant="outlined" id="name" onChange={handleChange} value={name} />
      <TextField label="密码" type="password" variant="outlined" id="pwd" onChange={handleChange} value={pwd} />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button variant="contained" sx={{ mr: 1 }} id="yes" onClick={handleClick}>确认</Button>
        <Button variant="contained" color="error" id="nod" onClick={handleCancel}>取消</Button>
      </Box>
      <hr />
      <i style={{ color: "red" }
      }>* 输入114514触发彩蛋</i>
    </Box>
  );
}

