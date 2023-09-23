import React, { useState } from "react";

function Delete(props){
function handlClick(){
    props.list = props.list.filter((item) => item.key!== props.parentItem.key);
    }
    return(
        <button onClick={handlClick}>Delete</button>
    );
}

export default Delete;