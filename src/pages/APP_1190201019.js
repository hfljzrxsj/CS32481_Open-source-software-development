import { useState } from 'react';
import {
    Autocomplete, TextField,
    Card, CardContent, Typography, Slider
} from '@mui/material';

function App() {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    const [volume, setVolume] = useState(50);
    const [movie, setMovie] = useState("");

    const handleChoice = (e, v) => {
        if (v === 'Pulp Fiction') {
            console.log("the selection cant be selected");
        }
        setMovie(v);
    }

    return (
        <div className="App"
            style={{
                height: "100vh", width: "100vw",
                display: "flex", justifyContent: "center", alignItems: "center"
            }}
        >
            <Card style={{ width: "345px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Your Movie: {movie}
                        <br />
                        Your Volume: {volume}
                    </Typography>
                </CardContent>
                <CardContent>
                    {/* make Pulp Fiction unseleectabl */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Movie"
                        />}
                        onInputChange={handleChoice}
                        isOptionEqualToValue={
                            (option, value) => (option.label === value.label)
                        }
                    />
                </CardContent>

                <CardContent>
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setVolume(e.target.value)} />
                </CardContent>

            </Card>
        </div>
    );
}

export default App;
