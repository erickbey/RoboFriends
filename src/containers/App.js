import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useState, useEffect } from 'react';


function App() {
  const [robotList, setRobotList] = useState([]);
  const [searchfield, setSearchfield] = useState('');  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setRobotList(json))
    }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = robotList.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return (
    <div className="App tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
