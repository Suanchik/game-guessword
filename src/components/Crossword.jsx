import React, { useEffect, useState } from 'react';
import Alfafit from './Alfafit';
import Words from './Words';
import InfoBlock from './InfoBlock';
import { levels } from '../words';

const Crossword = () => {

    const [copyinfo, setcopyinfo] = useState(levels[0].info);
    const [copywordList, setcopywordList] = useState('');
    const [level, setlevel] = useState(0);

    const [listOfWords, setlistOfWords] = useState(copywordList);
    const [choose, setchoose] = useState('');
    const [hideword, sethideword] = useState('');
    const [words, setwords] = useState('');
    const [leters, setleters] = useState('');
    const [errorLimit, seterrorLimit] = useState(0);
    const [lose, setlose] = useState(0);
    const [wins, setwins] = useState(0);
    const [youwin, setyouwin] = useState(false);
    const [youlose, setyoulose] = useState(false);
    const [wordIndex, setwordIndex] = useState(0);
    const [guesdWord, setguesdWord] = useState(null);

    useEffect(() => {
        setcopywordList(levels[level].wordList);
        setlistOfWords(levels[level].wordList);
        setcopyinfo(levels[level].info);
        setleters('')
        setwords('')
        sethideword('')
        setchoose('')
    }, [level])

    let redTime = () => {
        document.querySelector('.wors').style.backgroundColor = 'red'
        seterrorLimit(errorLimit + 1)
    }

    let whiteTime = () => {
        document.querySelector('.wors').style.backgroundColor = 'rgb(255, 196, 0)'
        seterrorLimit(errorLimit + 1)
    }

    useEffect(() => {
        if (choose !== '') {
            setwordIndex(copywordList.findIndex(el => el === choose))
            if (listOfWords.length >= 1) {
                sethideword(choose?.split('').map(() => ''));
            } else {
                setyouwin(true)
            }
        }
    }, [choose]);

    useEffect(() => {
        if (errorLimit === 4) {
            setyoulose(true)
            setlose(lose + 1)
            setlistOfWords([...copywordList])
            setwords('')
            sethideword('')
            setchoose('')
        }
    }, [errorLimit]);

    useEffect(() => {
        if (listOfWords.length === copywordList.length) {
            setchoose(listOfWords[Math.floor(Math.random() * listOfWords.length)]);
        }
    }, [listOfWords]);

    useEffect(() => {
        if (youwin) {
            setlistOfWords(copywordList);
        }
    }, [youwin]);


    useEffect(() => {
        if (words !== '') {
            if (words.length === choose.length) {
                const newlistOfWords = listOfWords.filter(el => el !== choose);
                sethideword('')
                if (!youlose && !youwin) {
                    setguesdWord(choose)
                } else {
                    setguesdWord(null)
                }
                setlistOfWords(newlistOfWords)
                setwords('');
                setchoose(newlistOfWords[Math.floor(Math.random() * newlistOfWords.length)]);
                setwins(wins + 1)
                if (errorLimit >= 1) {
                    seterrorLimit(errorLimit - 1)
                }
            } else {
                if (words.length > 0) {
                    sethideword(choose.split('').map(el => words.includes(el) ? el : ""));
                }
            }
        }
    }, [words])

    const removeGame = () => {
        setyouwin(false);
        seterrorLimit(0);
        setyoulose(false);
        setguesdWord(null);
        setleters('')
    }

    const getElementElement = (e) => {
        const filtr = choose.split('').filter(el => el === e.target.innerText)
        const word = choose.split('').filter(el => el === e.target.innerText);
        if (filtr.length > 0) {
            setwords(word[1] !== undefined ? (words + word[0]) + word[1] : words + word[0])
            setleters(word[1] !== undefined ? (words + word[0]) + word[1] : words + word[0])
        } else {
            setTimeout(redTime, 0)
            setTimeout(whiteTime, 200)
        }
    };

    const nextLevel = () => {
        setyouwin(false);
        seterrorLimit(0);
        setyoulose(false);
        setguesdWord(null);
        setleters('')
        if (level < levels.length - 1) {
            setlevel(level + 1);
        } else {
            setlevel(0);
        }
    }

    const levelslenght = [];

    for (let i = 0; i < levels.length; i++) {
        levelslenght.push(i)
    }

    return (
        <div>
            <div className="nav">
                {levelslenght.map(el => <span onClick={() => setlevel(el)} className={level === el ? "levelsChoosen" : "levels"}>{el === 0 ? "разминка" : "уровень - " + el} </span>)}
            </div>
            <div className="alfafit">
                <div>
                    <h2><span className="h2">{level < 1 ? 'разминка' : 'уровень - ' + level}</span></h2>
                </div>
                <div className="wors">
                    <div style={{ height: '220px' }}>
                        <Words hideword={hideword}
                            level={level}
                            nextLevel={nextLevel}
                            info={copyinfo}
                            wordIndex={wordIndex}
                            youlose={youlose}
                            youwin={youwin}
                            removeGame={removeGame}
                            guesdWord={guesdWord}
                            setguesdWord={setguesdWord}
                            setleters={setleters} />
                    </div>
                    <Alfafit leters={leters} youlose={youlose} youwin={youwin} guesdWord={guesdWord} getElementElement={getElementElement} />
                </div>
                <InfoBlock youwin={youwin} errorLimit={errorLimit} wins={wins} lose={lose} />
            </div>
        </div>
    )
};

export default Crossword;