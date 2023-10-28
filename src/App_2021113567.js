import { useState } from 'react';
import { Autocomplete, Box, TextField, Snackbar, Alert, Button, Dialog } from '@mui/material';

const options = [{ label: 'The Godfather', id: 1 }, { label: 'Pulp Fiction', id: 2 },];

function App() {
  const [openSnackBar, setOpenSnakeBar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box sx={{ width: 300, height: 300, marginX: 'auto', marginY: '100px' }}>
      <Autocomplete
        disablePortal
        onChange={(e, opt) => {
          setOpenSnakeBar(opt?.id === 2)
        }}
        options={options}
        renderInput={(params) => <TextField {...params} />}
      />
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openSnackBar} autoHideDuration={3000} onClose={() => setOpenSnakeBar(false)}>
        <Alert onClose={() => setOpenSnakeBar(false)} severity="error" sx={{ width: '100%' }}>
          the selection cant be selected
        </Alert>
      </Snackbar>
      <Button onClick={() => setOpenDialog(true)}>clike me</Button>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <TextField value={'Hello World'} disabled />
      </Dialog>
    </Box>
  );
}

export default App;
