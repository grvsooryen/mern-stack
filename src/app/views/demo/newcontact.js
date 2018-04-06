import React from "react";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Grid, Row, Col, Button } from 'react-bootstrap';

import SideBar from './components/sidebar';

import APIServices from "../../services";
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/usercontact.action';

class NewContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    getValidationState(min, max) {
        const length = this.state.name.length;
        if (length > max) return 'success';
        else if (length > min) return 'warning';
        else if (length > 0) return 'error';
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    nameValidation() {
        return this.getValidationState(3, 10);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleSubjectChange(e) {
        this.setState({ subject: e.target.value });
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    saveForm(e) {
        e.preventDefault();
        this.props.onInsertContactDetail(this.state);
        // APIServices.addContact(this.state)
        //     .then(data => {
        //         console.log("success");
        //     },
        //     data => {
        //         console.log("API returned non 200");
        //     })
        //     .catch(err => {
        //         dispatch(errorRTQ("API not working"));
        //     });
    }

    componentDidMount(){
        console.log('result : ',this.props.userDetail);
    }
    render() {
        return (
            <div className="container-fluid" style={{ marginLeft: "240px" }}>
                <SideBar />
                <h1> Add Contact </h1>
                <Grid className="mt-xs-50">
                    <Row>
                        <Col xs={12} md={6} >
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.nameValidation()}
                            >
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleNameChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>{this.nameValidation()}</HelpBlock>
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Enter text"
                                    onChange={this.handleEmailChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Subject</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.subject}
                                    placeholder="Enter text"
                                    onChange={this.handleSubjectChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Phone</ControlLabel>
                                <FormControl
                                    type="number"
                                    value={this.state.phone}
                                    placeholder="Enter text"
                                    onChange={this.handlePhoneChange}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <Button bsStyle="primary" onClick={this.saveForm} block >SAVE</Button>
                            <hr />
                            <pre>
                                {JSON.stringify(this.state, null, 4)}
                            </pre>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        userDetail:state.contactDetail.result!=null?console.log('reducer : ',state.contactDetail.result):console.log('reducer : null')
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInsertContactDetail:(contactResponse) => dispatch(actionCreators.contactAPICall(contactResponse))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(NewContact);