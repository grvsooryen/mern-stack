import React from 'react';
import { Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import SideBar from './components/sidebar';

import APIServices from "../../services";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Contacts App', contacts: [{name: "abc"}, {name: "xyz"}] };
    this.deleteContact = this.deleteContact.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  getContacts() {
     APIServices.listContact()
      .then(response => response.json())
      .then(data => {
        this.setState({contacts: data})
        console.log(data);
      }, data => {
        console.log(data);
      });
  }

  deleteContact(evt) {
    let getList =  this.getContacts;
console.log(evt,evt.currentTarget["data-index"],evt.currentTarget.id)
    APIServices.deleteContact(evt.currentTarget.id)
    .then(response => response.json())
    .then(data => {
      getList();
    }, data => {
      console.log(data);
    });
  }

  contactsTable(contacts) {
    return contacts.map((item, i) =>
      <tr key={i}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.number}</td>
        {<td><button id={item._id} data-index={i} onClick={this.deleteContact} className="close">remove</button></td>}
      </tr>
    );
  }

  componentDidMount() {
    this.getContacts();
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "240px" }}>
        
        <Link to="/demo/new" className="btn btn-danger mt-xs-20 pull-right">New Contact</Link>
        
        <h1>Contacts</h1>

        <SideBar />
        <Table responsive>
          <tbody>
            {this.contactsTable(this.state.contacts)}
          </tbody>
        </Table>
      </div>
    );
  }
}