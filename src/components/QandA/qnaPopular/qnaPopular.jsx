import React from 'react';
import style from './qnaPopular.module.css';
import QuestionAnswer from '../../QuestionAnswer/QuestionAnswer';

const QnaPopular = () => {
    return (
    <div >
        <h4>Популярные вопросы</h4>
        <div className={style.qnaContainer}>
            <QuestionAnswer question='aaa' answer='aaaaa'/>
            <QuestionAnswer question='aaa' answer='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'/>
            <QuestionAnswer question='aaa' answer='aaaaa'/>
        </div>
        <div className={style.buttonContainer}>
            <a className={style.moreButton}>
                Еще вопросы
            </a>
        </div>
        
    </div>
    
    )
    
}
export default QnaPopular;