import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Header from './components/Header/Header';
// import ContactForm from './components/ContactsForm/ContactsForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
import routes from './routes';
const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
);
const App = () => {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Header />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.contacts} component={ContactsPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </div>
    // <div className="App">
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
};

export default App;
