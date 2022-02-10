import React from 'react';
import smile1 from './img/smile-1.jpg';
import smile2 from './img/smile-2.jpg';
import smile3 from './img/smile-3.jpg';
import smile4 from './img/smile-4.jpg';
import smile5 from './img/smile-5.jpg';
import funny from './img/funny.jpg';
import up from './img/up.jpg';
import down from './img/down.jpg';

const InfoBlock = ({ errorLimit, wins, lose, youwin }) => {

    return (
        <div className="errorsZone">
            <div className="limitZone">
                <span className="error"><span className="errorNum">{errorLimit}</span>ошибки</span>
                <img className="smile" src={
                    youwin ? funny : errorLimit === 4 ? smile5 : errorLimit === 3 ? smile4 : errorLimit === 2 ? smile3 : errorLimit === 1 ? smile2 : errorLimit === 0 ? smile1 : null
                } alt="" />
                <span className="limit">лимит   <span className="errorNum">4</span></span></div>
            <div className="wins"> <img className="up" src={up} alt="like" /> победы: {wins}</div>
            <div className="loses"> <img className="down" src={down} alt="dislike" /> проигрыши: {lose}</div>
        </div>
    )
};

export default InfoBlock;