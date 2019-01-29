import React from 'react';
import SW from '../assets/images/star-wars-logo-black-and-white.png';
import '../assets/styles/imperial.scss';


class App extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>Hello React</h1>
                <img src="assets/image/Star_Wars_Logo.svg"/>
                <br />
                <img src={SW} style={{width:140}} />
            </div>
        )
    }
}

export default App;