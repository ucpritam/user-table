import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import history from "./history";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "flex",
    marginTop: theme.spacing(12)
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}));

const Input = () => {
  const classes = useStyles();
  var [data, setData] = React.useState(1);

  function getData(val) {
    if (data == "") data = 1;
    setData(val.target.value);
  }

  function checkInput() {
    history.push(data);
  }

  return (
    <div>
      <div className={classes.input}>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Enter student roll number"
            onChange={getData}
          />
        </form>

        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={checkInput}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Input;
