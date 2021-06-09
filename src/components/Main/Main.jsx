import React from 'react';
import style from './Main.module.css';
import MainAbout from './about_main/MainAbout'
import ArticleBlock from './article_block/ArticleBlock';
import TagsCloud from './tags_cloud/TagsCloud';
import QandABlock from './qanda_block/qanda_block';
import 'bootstrap/dist/css/bootstrap.min.css';




const Main = () => {
    return (
   <div>
       <MainAbout />
       <ArticleBlock />
       <TagsCloud />
       <QandABlock />
       
   </div>
    )
    
}
export default Main;