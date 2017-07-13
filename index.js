const secretArchivesLock = (lock, actions) => {
  return action.split('').reduce((result, word, index)=> {
    return getResult(result, word)
  },lock)
}

const getResult = (lock, word) => {
  switch (word) {
    case 'L':
      return leftWord(lock)
    break
    case 'R':
      return rightWord(lock)
    break
    case 'D':
      const flip = flipLock(lock)
      const rightLock = rightWord(flip)
      return flipLock(rightLock)
    break
    default:
      const flipa = flipLock(lock)
      const leftLock = leftWord(flipa)
      return flipLock(leftLock)

  }
  return lock
}

const leftWord = (lock) => {
  return lock.map((row, index) => {
    const arr = row.split('')
    const word = arr.reduce((result, point) => {
      return point !== '.' ? [...result, point] : result
    },[])
    const dot = new Array(lock.length - word.length).fill('.').map((string, index) => (string))
    return ([...word, ...dot]).join('')
  })
}

const rightWord = (lock) => {
  return lock.map((row, index) => {
    const arr = row.split('')
    const word = arr.reduce((result, point) => {
      return point !== '.' ? [...result, point] : result
    },[])
    const dot = new Array(lock.length - word.length).fill('.').map((string, index) => (string))
    return ([...dot, ...word]).join('')
  })
}

const flipLock = (lock) => {
  const arrLock = lock.map((row, index) => {
    return row.split('')
  })
  return arrLock[0].map((col, index) => {
    const colFlip = arrLock.map((row) => {
      return row[index]
    })
    return colFlip.join('')
  })
}


const input =
["....",
 "AB..",
 ".C..",
 "...."]

const action = 'RDL'
console.log(secretArchivesLock(input, action))
