import React from 'react';
import style from './QuestionAnswer.module.css'


const QuestionAnswer = (props) => {
    return (
   <div className={style.qnaContainer}>
       <a href="#">
           <div className={style.question}>
           {props.question}
       </div>
       <div>
            {props.answer}
       </div>
       </a>
       
       
   </div>
    )
    
}
export default QuestionAnswer;