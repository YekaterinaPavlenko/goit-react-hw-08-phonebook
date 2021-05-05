import React, { Component } from 'react';
import cfs from '../../components/ContactsForm/ContactForm.module.css';
class LoginPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={cfs.form}>
        <label className={cfs.label}>
          Email
          <input
            type="text"
            className={cfs.input}
            pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
            required
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
            // value={email}
          ></input>
        </label>
        <label className={cfs.label}>
          Password
          <input
            type="text"
            className={cfs.input}
            pattern="^[A-Za-zА-Яа-яЁё-0-9\s_]+$"
            required
            placeholder="Enter password"
            name="password"
            onChange={this.handleChange}
            // value={email}
          ></input>
        </label>
        <button type="submit" className={cfs.button}>
          Login
        </button>
      </form>
    );
  }
}

// const LoginPage = () => {
//   return (
//     <>
//       <p>Это LoginPage страничка.</p>
//     </>
//   );
// };
export default LoginPage;
