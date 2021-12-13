import './App.css';
import React, { Component } from 'react';
import Section from './components/Section';
import Form from './components/Form';

class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

render() {
  const { contacts, name } = this.state;
  return (
    <>
    <Section title="Phonebook">
     <Form />
    </Section>
    <Section title="Contacts">
      
    </Section>
    </>
  );
}
}


export default App;
