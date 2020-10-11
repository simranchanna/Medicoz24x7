import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./login.css";

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    handleClose();
    alert("You have been Successfully Registered!");
  };
  return (
    <div className="container">
      <div className="title">
        <h1>Medicoz 24x7</h1>
        <h2>Helps you to connect to your Doctors</h2>
      </div>
      <Paper className="box" elevation={3}>
        <form autoComplete="off">
          <TextField
            id="email"
            label="Email address"
            fullWidth
            color="secondary"
            type="email"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-secondary"
            label="Password"
            color="secondary"
            fullWidth
            type="password"
            required
          />
          <br />
          <br />
          <Link to="/dashboard">
            <Button
              style={{
                backgroundColor: "#f54291",
                color: "#fff",
                marginTop: "10px",
                padding: "10px"
              }}
              className="login-btn"
              variant="contained"
              fullWidth
            >
              Log In
            </Button>
          </Link>
          <br />
          <br />
          <a href="/">Forgotten password?</a>
          <br />
          <br />
          <hr />
          <Button
            style={{
              backgroundColor: "#42b72a",
              color: "#fff",
              marginTop: "30px",
              marginBottom: "20px",
              padding: "10px 15px"
            }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Create New Account
          </Button>
        </form>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Fill Up Your Details</DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>It's quick and easy.</DialogContentText>
            <TextField
              id="fname"
              label="First Name"
              color="secondary"
              required
            />
            <TextField
              id="lname"
              label="Last Name"
              color="secondary"
              required
            />
            <TextField
              id="email"
              label="Email Address"
              type="email"
              color="secondary"
              fullWidth
              required
            />
            <TextField
              id="standard-secondary"
              label="Password"
              color="secondary"
              fullWidth
              type="password"
              required
            />
            <br />
            <br />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              color="secondary"
              defaultValue="2017-05-24"
            />
          </DialogContent>
        </form>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
