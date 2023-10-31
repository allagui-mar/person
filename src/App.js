import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';


class App extends Component {
 constructor() {
    super();
    this.state = {
      show: false,
      timeInterval: null,
      person: {
        fullName: 'AbuObaida',
        bio: 'Abou Obaida, est le nom de guerre d un militant palestinien qui est le porte-parole des Brigades Izz ad-Din al-Qassam, la branche militaire de l organisation islamiste palestinienne Hamas.',
        imgSrc: 'https://www.lexpressquotidien.dz/wp-content/uploads/2021/05/Abou-Obeida.jpg ',
        profession: 'Militant Palestenien',
      },
    };
 }

 componentDidMount() {
    const timeInterval = setInterval(() => {
      this.setState({ timeInterval: new Date().toLocaleTimeString() });
    }, 1000);

    this.setState({ timeInterval });
 }

 componentWillUnmount() {
    clearInterval(this.state.timeInterval);
 }

 toggleShow = () => {
    this.setState({ show: !this.state.show });
 };

 render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App" >
        <h1 className='titre'>Profile</h1>
        <button style ={{marginBottom:'10 px', marginLeft:'70px' ,height:'30px'}} onClick={this.toggleShow}>
          {show ? 'Hide' : 'Show'} Person Profile
        </button>
        {show && (
          <Card className='card' style={{ width: '18rem' }}>
            
            <Card.Img className='centred' variant='top' src={person.imgSrc} />
            <Card.Body>
              <Card.Title>{person.fullName}</Card.Title>
              <Card.Text>{person.profession}</Card.Text>
              <Card.Text>{person.bio}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <p style={{marginLeft:'20px'}}>Component  mounted at: {timeInterval}</p>
        </div>
    );
 }
}

export default App;