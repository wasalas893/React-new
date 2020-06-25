import React from 'react';
import { Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon } from 'semantic-ui-react';
import {Link } from 'react-router-dom';    

class Login extends React.Component{
    state={
        email:"",
        password:""
    }

    onChange=event=>{};
    onSubmit=event=>{};


    render(){
        return(
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" icon  color="red" textAlign="center">
                  <Icon name="users" color="green" />
                  login
               </Header>
                 <Form onSubmit={this.handleSubmit} size="large">

                
                 <Form.Input
                  fluid
                  placeholder="User Password"
                  name="password"
                   onChange={this.handleChange}   
                    type="text"
                />
                <Button color="green" fluid size="large">
                Submit
               </Button>

                 </Form>
                 <Message>
                 Already a user? <Link to="/register">Register</Link>
          </Message>
                </Grid.Column>
            </Grid>
        );
    }
}
export default Login;