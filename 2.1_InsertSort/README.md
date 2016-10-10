### code is in `src/App.js`

```js
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
```
