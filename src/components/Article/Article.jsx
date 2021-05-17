import React from 'react';
import style from './Article.module.css'


const Article = (props) => {
    return (
   <div className={style.articleContainer}>
       <h4>
           {props.articleHeading}
       </h4>
       <div>
        {props.articleText}
       </div>
       <div className={style.moreButton}>
           Подробнее
       </div>
       
   </div>
    )
    
}
export default Article;