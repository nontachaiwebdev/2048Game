const secretArchivesLock = (lock, actions) => {
  return actions.split('').reduce((result, word, index)=> {
    if(word === 'U' || word === 'D'){
      const flip = flipLock(result)
      const operate = operateLock(flip)
      return word === 'U' ? flipLock(operate('L')) : flipLock(operate('R'))
    }
    else {
      const operate = operateLock(result)
      return operate(word)
    }
  },lock)
}

const operateLock = (lock) => (operate) => {
  return lock.map((row, index) => {
    const arr = row.split('')
    const word = arr.reduce((result, point) => {
      return point !== '.' ? [...result, point] : result
    },[])
    const dot = new Array(arr.length - word.length).fill('.').map((string, index) => (string))
    return (operate === 'L' ? [...word, ...dot] : [...dot, ...word]).join('')
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
["V...Y..E.PRFI..",
 ".ZO...ZU.R.Z...",
 ".....R.......U.",
 "..N.CE...S..RP.",
 "...J........T..",
 ".......H..I....",
 ".N.JE.......J.F",
 "...............",
 "A.K..G.........",
 "...PW.....W.G..",
 "UO..BJT.G.I....",
 ".R.....J.......",
 "...............",
 "..M.GCD.....S..",
 ".X.S..........."]

const action = 'LULLR'
console.log(secretArchivesLock(input, action))
