import Clock from './Clock';
import ColorBox from './ColorBox';
import InteractiveColorBox from './InteractiveColorBox';

function App() {
  return (
    <div className="App">
      <Clock />

      <ColorBox color="blue" />
      <ColorBox color="teal" />
      <ColorBox color="lime" />
      <ColorBox color="red" />

      <InteractiveColorBox />
    </div>
  );
}

export default App;
