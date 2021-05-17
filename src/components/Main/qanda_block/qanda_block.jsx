import React from 'react';
import style from './qanda_block.module.css'
import QuestionAnswer from '../../QuestionAnswer/QuestionAnswer';


const QandABlock = () => {
    return (
   <div>
       <h3>Есть вопросы?</h3>
       <div className={style.qnaContainer}>
            <QuestionAnswer question='lorem ipsum ?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu'/>
            <QuestionAnswer question='cherez chto realizovivaetsya rest api d django' answer='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et'/>
       </div>
   </div>
    )
    
}
export default QandABlock;