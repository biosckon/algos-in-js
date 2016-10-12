import React, { Component } from 'react';
import './App.css';

let RESULTS;

function merge(A, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - 1;
  let L = Array(n1 + 1);
  let R = Array(n2 + 1);
  for (let i = 0; i < n1; i++) { L[i] = A[p + i - 1]; }
  for (let j = 0; j < n2; j++) { R[j] = A[q + j]; }
  L[n1 + 1] = undefined;
  R[n2 + 1] = undefined;
  let i = 1;
  let j = 1;
  for ( let k = p; k < r; k++) {
    if (L[i] =< R[j]) 
  }
}

function mergeSort(a) {
  const ret = a.slice();
  // implement here

  return ret;
}

let a = [10, 3, 240, 34, 100, 2, 3, 5, 23];

RESULTS = mergeSort(a).join(' ');
const A = a.join(' ');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">Merge Sort:</div>
        <div className="In">In:  {A}</div>
        <div className="Out">Out: {RESULTS}</div>
      </div>
    );
  }
}

export default App;
