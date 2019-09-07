import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Spin,Icon } from 'antd';


const ant_ic = <Icon type="loading" style={{fontSize:50,margin:20}} spin />;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<div>
			<p>
			Hello World 6666
			</p>
		</div>

		<Spin indicator={ant_ic} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
