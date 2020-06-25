import React from 'react';
import firebase from './firebase';
import {Link} from 'react-router-dom';
import md5 from 'md5';

import {Grid,
    Form,

    Button,
    Header,
    Message,
 } from 'semantic-ui-react';

class register extends React.Component{
    state={
        username:"",
        email:"",
        password:"",
        usersRef:firebase.database().ref('users')


    };

   

    handleSubmit=event=>{
        event.preventDefault();
        firebase
  
        .auth()
  
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
  
        .then(createdUser => {
    
            console.log(createdUser);
            createdUser.user.updateProfile({
              displayName:this.state.username,
              photoURL:`http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
            })
            .then(()=>{
               this.saveUser(createdUser).then(()=>{
        
                console.log('user saved');
               })
            })
            .catch(err=>{
            console.error(err);
            
            })
  
     
    })
    .catch(err=>{
    console.error(err);
        
    })
};
saveUser=createdUser=>{
  return this.state.usersRef.child(createdUser.user.uid).set({

    name:createdUser.user.displayName,
    avatar:createdUser.user.photoURL

  });

};
    

    handleChange=event=>{
        this.setState({ [event.target.name]:event.target.value })
    }

    render(){
        const { username,email,password}=this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
           <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2"  textAlign="center">
        
             Register 
          </Header>

          <Form onSubmit={this.handleSubmit} size="large" >
           
              <Form.Input
                fluid
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={username}
                type="text"
              />

              <Form.Input
                fluid
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                type="email"
              />

              <Form.Input
                fluid
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              
                value={password}
                type="password"
              />

              <Button  color="primary" fluid size="large">
                Submit
              </Button>
          
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
        );
    }
}
export default register;