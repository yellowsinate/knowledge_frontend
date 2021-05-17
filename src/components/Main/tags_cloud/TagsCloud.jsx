import React from 'react';
import style from './TagsCloud.module.css'
import Tag from '../../Tag/Tag';



const TagsCloud = () => {
    return (
   <div>
       <h3>Актуальные теги</h3>
       <div>
            <Tag />
       </div>
   </div>
    )
    
}
export default TagsCloud;