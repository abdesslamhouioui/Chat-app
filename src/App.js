import {ChatEngine } from 'react-chat-engine';
import React from 'react';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
import './App.css';
import {Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const projectID = '9ebe2971-41d5-4692-8390-157ba0047d80';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div>
      <div style={{backgroundColor:'rgb(240, 240, 240)'}}>
      <Navbar bg="light" expand="lg" style={{marginLeft:'90%',backgroundColor:'rgb(240, 240, 240)',paddingTop:'0px',paddingBottom:'0px'}}>
  <Container style={{backgroundColor:'rgb(240, 240, 240)',margin:'auto'}}>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title={<Icon name='user circle' size='big'/>} id="basic-nav-dropdown"  >
        <NavDropdown.Item href="#action/3.1" onClick={()=>{localStorage.removeItem('password');localStorage.removeItem('username');window.location.reload();}}><Icon name='sign out' size='big'/> Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar></div>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      onConnect={(creds) => console.log(creds)}
			onFailAuth={(props) => console.log(props)}
			onNewChat={(chat) => console.log(chat)}
			onEditChat={(chat) => console.log(chat)}
			onDeleteChat={(chat) => console.log(chat)}
			onEditMessage={(chatId, message) => console.log(chatId, message)}
			onDeleteMessage={(chatId, message) => console.log(chatId, message)}
    />
    </div>
  );
};

export default App;
