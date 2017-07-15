export const secretArchivesLock = (lock, actions) => {
  const listLock = toList(lock)
  const resultOperateLock = actions.split('').reduce((result, word, index)=> {
    if(word === 'U' || word === 'D'){
      const flip = flipLock(result)
      const operate = operateLock(flip)
      return word === 'U' ? flipLock(operate('L')) : flipLock(operate('R'))
    }
    else {
      const operate = operateLock(result)
      return operate(word)
    }
  },listLock)
  return toWord(resultOperateLock)
}

const operateLock = (lock) => (operate) => {
  return lock.map((point) => {
    const word = point.join('').split('.').join('').split('')
    const dot = new Array(point.length - word.length).fill('.')
    const finalResult = operate === 'L' ? [...word, ...dot] : [...dot, ...word]
    return finalResult
  })
}

const flipLock = (lock) => {
  console.log(lock[0])
  return lock[0].map((col, index) => {
    return lock.map((row) => {
      return row[index]
    })
  })
}

const toList = (lock) => {
  return lock.map((row, index) => {
    return row.split('')
  })
}

const toWord = (lock) => {
  return lock.map((row, index) => {
    return row.join('')
  })
}

const input =
["....",
 "AB..",
 ".C..",
 "...."]

const action = 'D'
console.log(secretArchivesLock(input, action))
