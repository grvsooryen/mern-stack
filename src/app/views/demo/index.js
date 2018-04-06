import React from 'react';
import { Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import SideBar from './components/sidebar';
import * as actionCreators from '../../actions/usercontact.action';
import APIServices from "../../services";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Contacts App', contacts: [{name: "abc"}, {name: "xyz"}] };
    this.deleteContact = this.deleteContact.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.contactsTable=this.contactsTable.bind(this);
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
    this.props.onGetContact()
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "240px" }}>
        
        <Link to="/demo/new" className="btn btn-danger mt-xs-20 pull-right">New Contact</Link>
        
        <h1>Contacts</h1>

        <SideBar />
        <Table responsive>
          <tbody>
            {this.contactsTable(this.props.userDetail)}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
      userDetail:state.contactDetail.result
  }
};
const mapDispatchToProps = dispatch => {
  return {
      onGetContact:() => dispatch(actionCreators.getContactAPICall())
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Demo);