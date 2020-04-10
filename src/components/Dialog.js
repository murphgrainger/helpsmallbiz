import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import FormSupport from './FormSupport';

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstName: "",
      lastName: "",
      description: "",
      amount: "",
      type: "",
      terms: false
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleChange = (event) => {
    const value = event.target.name === 'terms' || event.target.name === 'anonymous'
      ? !this.state[event.target.name]
      : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };


  onSubmit = async (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      description,
      amount,
      type
    } = this.state;
    const data = {
      firstName,
      lastName,
      description,
      amount,
      type
    };
    try {
      let response = await fetch(`/pledge/${this.props.info.id}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
      let result = await response.json();
      if (result.status !== 200) throw new Error ();
      this.props.refreshBusinesses();
      this.setState({
        open: false,
        firstName: "",
        lastName: "",
        description: "",
        amount: "",
        type: "",
        terms: false
      })
    }
  catch {
    this.setState({
      errMessage: "Oops! Something went wrong.",
      showError: true
    })
  }
}

render() {
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
        Log Support
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <h2 className="form-title">Log Support</h2>
        <DialogContent>
          <FormSupport info={this.props.info} onSubmit={this.onSubmit} handleClose={this.handleClose} handleChange={this.handleChange} amount={this.state.amount} type={this.state.type}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
}

export default FormDialog;
