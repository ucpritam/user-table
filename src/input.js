import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SingleUser from "./single-user";
import Data from "./data.json";

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
  const [print, setPrint] = React.useState(false);

  var size = Data.length;

  function getData(val) {
    if (data == "") data = 1;
    setData(val.target.value);
  }

  useEffect(() => {
    checkInput();
  });

  const checkInput = () => {
    console.log(data);
    console.log(print);
    if (data != "" && print != false) {
      return <SingleUser id={data} size={size} />;
    }
  };

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
          onClick={() => setPrint(true)}
        >
          Submit
        </Button>
      </div>

      {/* {checkInput()} */}
    </div>
  );
};

export default Input;
