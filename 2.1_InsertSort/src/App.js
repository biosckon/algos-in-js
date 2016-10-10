import React, { Component } from 'react';
import './App.css';

let RESULTS;

function insertSort(a) {
  const ret = a.slice();
  for (let j = 1; j < ret.length; j++) {
    let key = ret[j];
    // insert a[j] into sorted seq a[0..j-1]
    let i = j - 1;
    while ((i >= 0) && (ret[i] > key)) {
      ret[i + 1] = ret[i];
      i -= 1;
    }
    ret[i + 1] = key;
  }
  return ret;
}

let a = [10, 3, 240, 34, 100, 2, 3];

RESULTS = insertSort(a).join(' ');
const A = a.join(' ');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>In:  {A}</div>
        <div>Out: {RESULTS}</div>
      </div>
    );
  }
}

export default App;
