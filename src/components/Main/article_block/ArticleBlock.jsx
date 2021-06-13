import React from 'react';
import style from './ArticleBlock.module.css';
import Article from '../../Articles/Articles';


const ArticleBlock = () => {
    return (
   <div>
       <h3 className={style.heading}>
           Интересные статьи для вас
       </h3>
       <div className={style.articlesContainer}>
        <Article articleText='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et q' articleHeading='Article 1'/>
        <Article articleText='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, ' articleHeading='Article 2'/>
        <Article articleText='t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum' articleHeading='Article 3'/>
       </div>
       <div className={style.more}>
           <div> 
               Еще статьи
           </div>
          
       </div>
   </div>
    )
    
}
export default ArticleBlock;