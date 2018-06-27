import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Button, Tabs, Tab, Table, Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        users: []
    };
  }

  componentDidMount(){
    fetch('/api/users')
    .then(response => response.json())
    .then(users => this.setState({ users }))
    .catch(error => console.error(error.message));

  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
          <div className="App">

            <h1>Welcome to NG Admin</h1>

            <Alert bsStyle="warning">
              <strong>Warning</strong> This is sample of Warning alert
            </Alert>

            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Courses">
                Courses will be provided soon
                <Button bsStyle="primary">Primary</Button>
              </Tab>
              <Tab eventKey={2} title="Users">

                <h2>Users</h2>
                
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th align='center'>First Name</th>
                      <th>Last Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Start Date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(user => 
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.startdate}</td>
                        <td>{user.salary}</td>  
                      </tr>)
                    }
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey={3} title="Tab 3" disabled>
                Tab 3 content
              </Tab>
            </Tabs>
            
            
          </div>
          </Col>
          </Row>
      </Grid>

      
    );
  }
}

export default App;
