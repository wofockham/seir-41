import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>Social Netork</h1>
      <Profile name="Groucho Marx" age="45" motto="No gods no monsters" pic="http://www.fillmurray.com/500/700" />
      <Profile name="Harpo Marx" age="44" pic="http://www.fillmurray.com/501/702" />
      <Profile name="Chico Marx" age="43" motto="No gods no monsters" pic="http://www.fillmurray.com/502/701" />
    </div>
  );
}

export default App;
