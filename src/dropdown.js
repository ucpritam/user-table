import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "./input";
import User from "./user";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Dropdown = () => {
  const classes = useStyles();
  const [val, setVal] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const checkOption = () => {
    if (val == 1) return null;
    else if (val == 2) return <User />;
    else return <Input />;
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={val}
          onChange={handleChange}
        >
          <MenuItem value="1">Select one option</MenuItem>
          <MenuItem value="2">Get all student data</MenuItem>
          <MenuItem value="3">Get student by roll</MenuItem>
        </Select>
      </FormControl>

      {checkOption()}
    </div>
  );
};

export default Dropdown;
