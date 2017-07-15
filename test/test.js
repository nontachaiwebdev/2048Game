import { secretArchivesLock } from '../'
import { expect } from 'chai'

describe('Test with many Matrix Input', function() {

  it('Test Case1', function() {
    const input =
    ["....",
     "AB..",
     ".C..",
     "...."]
    const action = 'RDL'
    const expected =
    ["....",
     "....",
     "B...",
     "AC.."]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case2', function() {
    const input =
    ["A.B",
     "...",
     "C.D"]
    const action = 'DR'
    const expected =
    ["...",
     ".AB",
     ".CD"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case3', function() {
    const input =
    ["AB",
    "CD"]
    const action = 'RURL'
    const expected =
    ["AB",
     "CD"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case4', function() {
    const input =
    ["A.",
    "CD"]
    const action = 'RRRRRRRR'
    const expected =
    [".A",
    "CD"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case5', function() {
    const input =
    ["AB",
    ".."]
    const action = 'DR'
    const expected =
    ["..",
    "AB"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case6', function() {
    const input =
    ["U....",
     ".....",
     ".....",
     "....."]
    const action = 'RDL'
    const expected =
    [".....",
     ".....",
     ".....",
     "U...."]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case7', function() {
    const input =
    [".....",
     "..A..",
     ".C...",
     "...D."]
    const action = 'UDR'
    const expected =
    [".....",
     ".....",
     ".....",
     "..CAD"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case8', function() {
    const input =
    ["...PD.O..P",
     ".MF.......",
     "Q.....I...",
     "....JNJ...",
     ".Y..O.O.J.",
     "V..U......",
     "..J..H....",
     "....T.J...",
     "W.....A.B.",
     ".P....O.K."]
    const action = 'D'
    const expected =
    ["..........",
     "..........",
     "..........",
     "......O...",
     "......I...",
     "......J...",
     "....D.O...",
     "QM..J.J.J.",
     "VYFPONA.B.",
     "WPJUTHO.KP"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case9', function() {
    const input =
    ["...PD.O..P",
     ".MF.......",
     "Q.....I...",
     "....JNJ...",
     ".Y..O.O.J.",
     "V..U......",
     "..J..H....",
     "....T.J...",
     "W.....A.B.",
     ".P....O.K."]
    const action = 'L'
    const expected =
    ["PDOP......",
     "MF........",
     "QI........",
     "JNJ.......",
     "YOOJ......",
     "VU........",
     "JH........",
     "TJ........",
     "WAB.......",
     "POK......."]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case10', function() {
    const input =
    ["...PD.O..P",
     ".MF.......",
     "Q.....I...",
     "....JNJ...",
     ".Y..O.O.J.",
     "V..U......",
     "..J..H....",
     "....T.J...",
     "W.....A.B.",
     ".P....O.K."]
    const action = 'LD'
    const expected =
    ["PD........",
     "MF........",
     "QI........",
     "JN........",
     "YO........",
     "VUO.......",
     "JHJ.......",
     "TJO.......",
     "WABP......",
     "POKJ......"]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

  it('Test Case11', function() {
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
    const expected =
    ["........VYEPRFI",
     "........ZOZURZI",
     ".........RUESRP",
     ".........NCEJFG",
     "..........JTGGT",
     "..........HIWJS",
     "...........NJBD",
     "............AKC",
     ".............PW",
     ".............UO",
     ".............RJ",
     ".............MG",
     ".............XS",
     "...............",
     "..............."]
    const output = secretArchivesLock(input, action)
    expect(output).to.deep.equal(expected);
  });

});
