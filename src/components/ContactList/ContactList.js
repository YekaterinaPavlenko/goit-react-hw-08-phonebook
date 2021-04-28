import React, { Component } from 'react';
import { connect } from 'react-redux';
import ls from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { getAllContacts } from '../../redux/allContacts/allContactsOperations';
import { filteredData } from '../../redux/filter/filterSelector';

class ContactList extends Component {
  componentDidMount() {
    this.props.myGetAllContacts();
  }

  render() {
    // console.log(this.props);
    const { contacts } = this.props;
    // console.log(contacts);
    return (
      <ul className={ls.list}>
        {contacts.length > 0 ? (
          <ContactItem contacts={contacts} />
        ) : (
          <p>You have no contacts</p>
        )}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

const mapStateToProps = store => {
  return { contacts: filteredData(store) };
};
const mapDispatchToProps = {
  myGetAllContacts: getAllContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
