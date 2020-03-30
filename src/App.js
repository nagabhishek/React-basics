import React from 'react';
import './App.css';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Counter from './components/Counter';
import EventBinding from './components/EventBinding';
import StyleComponent from './components/StyleComponent';
import ParentComponent from './components/ParentComponent';
import PersonList from './components/PersonList';
import ClickCounter from './components/HOC/ClickCounter'
import HoverCounter from './components/HOC/HoverCounter'
import A from './components/ContextDemo/A';
import UserContext from './components/ContextDemo/userContext'
import Lifecycle from './components/Lifecycle/Lifecycle';

//import styles from './styles.module.css'

function App() {
  return (
    <div className="App">
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <ClassComponent name="Abhishek"/> */}
      {/* <FunctionalComponent name="Abhishek"/> */}
      {/* <EventBinding/> */}
      {/* <Counter/> */}
      {/* <StyleComponent/> */}
      {/* <ParentComponent/> */}
      {/* <PersonList/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}

      {/* <UserContext.Provider value="Hello from Context!!!">
          <A />
        </UserContext.Provider> */}
        <Lifecycle/>
    </div>
  );
}

export default App;
