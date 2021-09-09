import React from "react";
import { Router, Switch, Route, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import history from "./history";
import Paper from "@material-ui/core/Paper";

import Data from "./data.json";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

const Single = ({ id, size }) => {
  const classes = useStyles();
  var hasError = false;

  if (id > size || id <= 0 || isNaN(id)) hasError = true;

  return (
    <div>
      {!hasError && (
        <div>
          <TableContainer component={Paper}>
            {console.log("inside Table")}
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Roll</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={Data[id - 1].id}>
                  <TableCell component="th" scope="row">
                    {Data[id - 1].id}
                  </TableCell>
                  <TableCell align="right">{Data[id - 1].name}</TableCell>
                  <TableCell align="right">{Data[id - 1].email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => history.push("/")}
          >
            Back to home
          </Button>
        </div>
      )}
    </div>
  );
};

export default Single;
