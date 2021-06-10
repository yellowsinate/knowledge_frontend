import React from 'react';
import style from './Main.module.css';
import MainAbout from './about_main/MainAbout'
import ArticleBlock from './article_block/ArticleBlock';
import QandABlock from './qanda_block/qanda_block';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from '../Tags/Tags';



const Main = () => {
    return (
   <div>
       <MainAbout />
       <ArticleBlock />
       <Tags />
       <QandABlock />
       
   </div>
    )
    
}
export default Main;