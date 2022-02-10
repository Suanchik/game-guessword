import React from 'react';

const Alfafit = ({ leters, youlose, youwin, guesdWord, getElementElement }) => {

    const alf = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

    const alfTable = alf.map((el, index) =>
        <div
            key={index}
            onClick={leters.split('').includes(el) || youlose || youwin || guesdWord ? null :
                (e) => getElementElement(e)} className={`${youlose || youwin || guesdWord ? "alfelements oposite" :
                    leters.split('').includes(el) ? "leterdis alfelements" : "alfelements"}`}>
            {el}
        </div>);

    return (
        <div className="alfelementsBlock">
            {alfTable}
        </div>
    )
};

export default Alfafit;