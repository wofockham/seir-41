import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloUser name="Groucho" instrument="guitar" />
      <HelloUser name="Harpo" />
      <HelloUser />
    </div>
  );
}

export default App;
