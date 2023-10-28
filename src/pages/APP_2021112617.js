import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Rating,
  CardContent,
  Button,
  Card,
  CardActions,
  Typography,
  Snackbar,
} from "@mui/material";

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];
export default function App(props) {
  const [plotCharacterRating, setPlotCharacterRating] = useState(0);
  const [propRating, setPropRating] = useState(0);
  const [audiovisualRating, setAudiovisualRating] = useState(0);
  const [evaluation, setEvaluation] = useState("");
  const [movie, setMovie] = useState(null);
  const [movieSelError, setMovieSelError] = useState(false);
  return (
    <Card
      sx={{
        marginX: "auto",
        marginY: "100px",
        width: "400px",
      }}
    >
      <CardContent>
        <Typography component="legend">电影</Typography>
        <Autocomplete
          disablePortal
          value={movie}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(e, val) => {
            if (val?.id === 2) {
              setMovieSelError(true);
            } else {
              setMovie(val);
            }
          }}
          options={options}
          renderInput={(params) => <TextField {...params} variant="standard" />}
        />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={movieSelError}
          autoHideDuration={3000}
          onClose={() => setMovieSelError(false)}
          message={"the selection cant be selected"}
        />
        <Typography component="legend">剧情人物评分</Typography>
        <Rating
          value={plotCharacterRating}
          onChange={(event, newValue) => {
            setPlotCharacterRating(newValue);
          }}
        />
        <Typography component="legend">场景道具评分</Typography>
        <Rating
          value={propRating}
          onChange={(event, newValue) => {
            setPropRating(newValue);
          }}
        />
        <Typography component="legend">视听感受评分</Typography>
        <Rating
          value={audiovisualRating}
          onChange={(event, newValue) => {
            setAudiovisualRating(newValue);
          }}
        />
        <Typography component="legend">评价</Typography>
        <TextField
          sx={{
            width: "350px",
          }}
          multiline
          maxRows={5}
          value={evaluation}
          onChange={(event) => {
            setEvaluation(event.target.value);
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          onClick={(event) => {
            let data = {
              movie: movie,
              plotCharacterRating: plotCharacterRating,
              propRating: propRating,
              audiovisualRating: audiovisualRating,
              evaluation: evaluation,
            };
            alert(JSON.stringify(data));
          }}
        >
          提交
        </Button>
      </CardActions>
    </Card>
  );
}
