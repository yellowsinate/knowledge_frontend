import React from 'react';
import style from './Tag.module.css'


const Tag = () => {
    return (
   <div className={style.tagsContainer}>
       {listTags}
   </div>
    )
    
}
export default Tag;

const tags = ['ms teams','студентам','сотрудникам','организация учебного процесса','bitrix','шаблоны','aaaaaa','bbbbbbb','ccccc','восстановление данных','идущий к реке'];
const listTags = tags.map((tag) =>
    <div className={style.tag}>{tag}</div>
)