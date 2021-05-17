import React from 'react';
import style from './QandA.module.css';
import QnaPopular from './qnaPopular/qnaPopular';
import TagsCloud from '../Main/tags_cloud/TagsCloud';
import AskQuestion from './AskQuestion/AskQuestion';


const QandA = () => {
    return (
    <div className={style.qandAContainer}>
        <h4> Q & A</h4>
        <QnaPopular />
        <div className={style.tagsandsearchContainer}>
            <TagsCloud />
            <div  className={style.searchContainer}>
                <form action="" className={style.searchForm}>
                   <input className={style.search} type="search" placeholder='Поиск по тегам, категориям и прочее'/>
                   <input type="submit" value='Найти' />
                </form>
            </div>
        </div>
        <h4> Не нашел ответа на вопрос? Задай собственный!</h4> 
        <AskQuestion />
    </div>

    )
    
}
export default QandA;