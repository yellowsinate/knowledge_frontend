import React from 'react';
import style from './AskQuestion.module.css';

const AskQuestion = () => {
    return (
    <div className={style.askQuestionContainer}>
        <form action="sendQuestion">
            <input className={style.textInput} type="text" placeholder='Введите вопрос'/>
            <input className={style.submitButton} type="submit" value="Задать вопрос" />
        </form>
    </div>
    
    )
    
}
export default AskQuestion;