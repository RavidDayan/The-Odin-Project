import React, { useState } from "react";
import { workList } from './WorkClass.jsx'

function WorkItem({ workDetails, deleteFunc }) {
    const [item, UpdateItem] = useState(workDetails);

    function Delete() {
        deleteFunc("work", item.key);
    }

    return (
        <div key={item.key} id={item.key}>
            <ul>
                <li><label>Company name: </label>
                    <label name={item.name}>{item.name}</label></li>
                <li><label>Position: </label>
                    <label name={item.position}>{item.position}</label></li>
                <li><label>Sumarry: </label>
                    <label name={item.summary}>{item.summary}</label></li>
                <li><input type="date" name={item.dateFrom}></input></li>
                <li><input type="date" name={item.dateTo}></input></li>
                <button onClick={Delete}>click me</button>
            </ul>
        </div>
    );
}

export default WorkItem;