import React, { Component } from 'react';
import './App.css';

function _merge(A, p, q, r) {
  let n1 = q - p + 1, n2 = r - 1;
  let L = Array(n1 + 1), R = Array(n2 + 1);
  for (let i = 0; i < n1; i += 1) { L[i] = A[p + i - 1]; }
  for (let j = 0; j < n2; j += 1) { R[j] = A[q + j]; }
  L[n1 + 1] = undefined; R[n2 + 1] = undefined;
  let i = 1, j = 1;
  for (let k = p; k < r; k++) {
    if (L[i] >= R[j]) { A[k] = L[i]; i += 1; }
    else { A[k] = R[j]; j += 1; }
  }
  console.log(A);
}

function MergeSort(A, p, r) {
    if (p < r) {
      let q = (p + r)/2;
      MergeSort(A, p, q);
      MergeSort(A, q + 1, r);
      _merge(A, p, q, r);
    }
    return A;
}

let a = [10, 3, 240, 34, 100, 2, 3, 5, 23];

const IN = a.join(' ');
const OUT = MergeSort(a).join(' ');

//####################################################
//### Visualisation

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">Merge Sort:</div>
        <div className="In">In : {IN}</div>
        <div className="Out">Out: {OUT}</div>
      </div>
    );
  }
}

export default App;
