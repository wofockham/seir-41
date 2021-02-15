import React, { useState } from 'react';

const Clickr = () => {
  const [clicks, setClicks] = useState(0); // Destructuring

  return (
    <div>
      <button onClick={ () => setClicks(clicks + 1) }>{ clicks } clicks so far</button>
    </div>
  )
};

// class Clickr extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clicks: 0
//     };
//     this._incrementClicks = this._incrementClicks.bind(this);
//   }
//
//   _incrementClicks() {
//     this.setState({clicks: this.state.clicks + 1});
//   }
//
//   render() {
//       return (
//         <div>
//           <button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
//         </div>
//       )
//   }
// }

export default Clickr;
