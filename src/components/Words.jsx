import React, { useState } from 'react';



const Words = ({ hideword, youlose, youwin, removeGame, guesdWord, setguesdWord, setleters, wordIndex, info, nextLevel, level }) => {


    return (
        <div className="wordguest">
            {youlose || youwin ?
                <div>
                    {youlose || !youwin ? <div className="loseAll">вы проиграли</div> :
                        level < 2 ? <div className="guessedAll">вы угадали все слова</div> :
                            <div className="guessedAll">вы выиграли игру</div>
                    }
                    {youlose || !youwin ?
                        <div className="onemore" onClick={removeGame}>еще раз ?</div> : <div className="onemore" onClick={nextLevel}>
                            {level < 2 ? "следующий уровень" : "играть снова"}
                        </div>}

                </div> :
                <div className="hide">
                    {!guesdWord ? hideword ? hideword.map(el => el ? <div className="kubiki">{el}</div> :
                        <div className="kubikihide">О</div>) :
                        null :
                        <div className="guesedZone">
                            <div className="guesed">
                                {guesdWord.split('').map(el => <div className="kubikiGuessed">{el}</div>)}
                            </div>
                            <div onClick={() => { setguesdWord(null); setleters('') }} className="next">следующее</div>
                        </div>}
                </div>}
            {youlose || youwin ? null : guesdWord ? null : <div className="zagadka">{info[wordIndex]}</div>}
        </div>
    )
};

export default Words;
