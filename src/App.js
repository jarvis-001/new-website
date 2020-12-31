import React from 'react';
import {Navigation,Footer} from './components';
import styles from './App.module.css';
class App extends React.Component{
    render(){
        return(
            <div className = {styles.container}>
                <Navigation />
                <Footer />
            </div>
        )
    }
}

export default App;