import React, { useState } from 'react';
import { Redirect } from 'react-router';

const Tag = ({ tag }) => {

    let [ redirect, setRedirect ] = useState(false);

    function getToSearch(id) {
        setRedirect(true);
    }

    if (!redirect)
        return <div className="tag" onClick={() => getToSearch(tag.pk)}>{tag.name}</div>
    else
        return <Redirect to={`/tags/search/${tag.pk}`} />

}
export default Tag;