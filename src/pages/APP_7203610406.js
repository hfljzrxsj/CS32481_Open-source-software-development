import {
    Autocomplete, TextField, Box, Checkbox, Switch
} from '@mui/material';

function Check(id) {
    if (id === 2) {
        return (
            alert("the selection cant be selected")
        );
    }
}

function App() {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div style={{
            height: "100vh", width: "100vw",
            display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                }}
            >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    onChange={(event, newInputValue) => {
                        if (newInputValue != null) {
                            Check(newInputValue.id);
                        }
                    }}
                    renderInput={(params) => <TextField {...params} label="Alter" />}
                />
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <div>
                    <Switch {...label} defaultChecked />
                    <Switch {...label} defaultChecked color="secondary" />
                    <Switch {...label} defaultChecked color="warning" />
                    <Switch {...label} defaultChecked color="default" />
                </div>
            </Box>
        </div>
    );
}
export default App;