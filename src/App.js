import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'


// penggunaan export default
class App extends Component {
  state = {
    angka : 1
  }

  pencettambah = (tambah) => {
    if(tambah) {
      this.setState({angka : this.state.angka+1})
    } else {
      this.setState({angka : this.state.angka-1})
    }
  }

  render() {
    return (
      <div>
        <h1>Selamat Datang {this.state.angka}</h1>
        {/* <button onClick={this.pencettambah}>+</button>
        <button onClick={this.pencetkurang}>-</button> */}
        <Button jenisBtn='btn-primary' funcpencet={() => this.pencettambah(true)}>+</Button> 
        <Button jenisBtn='btn-secondary' funcpencet={() => this.pencettambah(false)}>-</Button>
      </div>
    );
  }
}

export default App;

// penggunaan export by name
// export const App1 = () => {
//   return (
//     <div>
//       <h1>Selamat Datang Hasian</h1>
//     </div>
//   );
// }
