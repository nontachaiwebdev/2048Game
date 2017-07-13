const secretArchivesLock = (lock, actions) => {
  return action.split('').reduce((result, word, index) => {
    return getResult(result, word);
  }, lock);
};

const getResult = (lock, word) => {
  switch (word) {
    case 'L':
      return leftWord(lock);
      break;
    case 'R':
      return rightWord(lock);
      break;
    case 'D':
      flipLock(lock);
      break;
    default:

  }
  return lock;
};

const leftWord = lock => {
  return lock.map((row, index) => {
    const arr = row.split('');
    const word = arr.reduce((result, point) => {
      return point !== '.' ? [...result, point] : result;
    }, []);
    const dot = new Array(lock.length - word.length).fill('.').map((string, index) => string);
    return [...word, ...dot].join('');
  });
};

const rightWord = lock => {
  return lock.map((row, index) => {
    const arr = row.split('');
    const word = arr.reduce((result, point) => {
      return point !== '.' ? [...result, point] : result;
    }, []);
    const dot = new Array(lock.length - word.length).fill('.').map((string, index) => string);
    return [...dot, ...word].join('');
  });
};

const flipLock = lock => {
  const arrLock = lock.map((row, index) => {
    return row.split('');
  });
  let newFlipLock = [[], [], [], []];
  for (let x = 0; x < arrLock.length; x++) {
    for (let y = 0; y < arrLock[x].length; y++) {
      newFlipLock[y][x] = arrLock[x][y];
    }
  }
  console.log(newFlipLock);
};

const input = ["....", "AB..", ".C..", "...."];

const action = 'D';
console.log(secretArchivesLock(input, action));
