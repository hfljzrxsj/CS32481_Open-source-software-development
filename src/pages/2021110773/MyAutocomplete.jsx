import React, { useState } from "react";
import { TextField, Dialog, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

export default function Autocomplete_2021110773 () {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelect = (event, newValue) => {
    if (newValue && newValue.label === "Pulp Fiction") {
      handleOpen();
      setSelectedOption(null);
    } else {
      setSelectedOption(newValue);
    }
  };

  return (
    <div
      className="MUI"
    ><h3>Autocomplete</h3>
      <Autocomplete
        id="autocomplete-demo"
        options={options}
        getOptionLabel={(option) => option.label}
        value={selectedOption}
        onChange={handleSelect}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <Dialog
        className="dialog"
        open={open}
        onClose={handleClose}

        sx={{
          "& .MuiPaper-root": {
            padding: "100px",
          }
        }}
      >
        <h2
          className="dialog-title"

          sx={{
            margin: "100px",
            padding: "100px",
            ".dialog-title": {
              textAlign: "center",
              margin: "100px",
              padding: "100px",
            }
          }}

        //TODO: 为什么这里的样式不生效？
        >&nbsp;The selection can't be selected.&nbsp;</h2>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClose} sx={{ margin: "0 10px" }}>
            关闭
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}