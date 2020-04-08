import React, { Component } from "react";
import { withFirebase } from "../Firebase";
<<<<<<< HEAD
{
  {
    /*import { Link, withRouter } from 'react-router-dom';*/
  }
}

{
  {
    /*import * as ROUTES from '../../constants/routes';*/
  }
}
const SignUpPage = () => (
  <div>
    <div class="row justify-content-center  bg-white p-5 ">
      <h1>SignUp</h1>
    </div>

    <SignUpForm />
  </div>
);
=======
import { withRouter } from "react-router-dom";
//import { Link } from 'react-router-dom';
//import Mainpage from '../mainpage';
{ {/*import { Link, withRouter } from 'react-router-dom';*/ } }


{ {/*import * as ROUTES from '../../constants/routes';*/ } }
/*const SignUpPage = () => (
    <div>
        <div class="row justify-content-center  bg-white p-5 " ><h1>SignUp</h1></div>

        <SignUpForm />
        
    </div>
);*/

>>>>>>> ef159e3568514d465a1938e72d9e99597382830d
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/Mainpage");
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
=======
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        passwordOne
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push("/Mainpage");

            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();

    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,

            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div class="row justify-content-center  bg-white p-5 " ><h1>SignUp</h1></div>

                <div class="row justify-content-center bg-white">
                    <div className="col-6">
                        <input
                            name="username"
                            class="col-12 my-2"
                            value={username}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Full Name"

                        />
                        <input
                            name="email"
                            class="col-12 my-2"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
>>>>>>> ef159e3568514d465a1938e72d9e99597382830d

      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div class="row justify-content-center bg-white">
          <div className="col-6">
            <input
              name="username"
              class="col-12 my-2"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              class="col-12 my-2"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="passwordOne"
              class="col-12 my-2"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              class="col-12 my-2"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button
              class="btn btn-primary col-12 my-2"
              disabled={isInvalid}
              type="submit"
            >
              Sign Up
            </button>
            {error && <p>{error.message}</p>}
          </div>
        </div>
      </form>
    );
  }
}
const SignUpForm = withFirebase(SignUpFormBase);
<<<<<<< HEAD
export default SignUpPage;
export { SignUpForm };
=======
export default SignUpForm;
//export default SignUpPage;
//export { SignUpForm };
>>>>>>> ef159e3568514d465a1938e72d9e99597382830d
