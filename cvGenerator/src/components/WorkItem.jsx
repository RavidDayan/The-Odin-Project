import React, { useState } from "react";
import { workList } from './WorkClass.jsx'

function WorkItem({ workDetails, deleteFunc }) {
    const [item, UpdateItem] = useState(workDetails);
    const [editButton, setEditButton] = useState(<button name="editButton" onClick={Edit}>edit</button>);
    let tempItem;

    function Delete() {
        deleteFunc("work", item.key);
    }
    function Edit() {
        tempItem = item;
        let labels = document.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.displayOnly = true;
        });
    }
    function Edit() {
        setEditButton(<button onClick={Save}>save</button>);
        tempItem = item;
        let labels = document.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.displayOnly = true;
        });
    }
    function Save() {
        setEditButton(<button onClick={Edit}>edit</button>);
        UpdateItem(tempItem);
        let labels = document.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.displayOnly = true;
        });
    }
    function OnChange(event) {
        const attributeName = event.target.getAttribute("name");
        tempItem[attributeName] = event.target.value;
    }

    return (
        <div key={item.key} id={item.key}>
            <ul>
                <li><label>Company name: </label>
                    <span className="changeable" name={item.name} onChange={OnChange}>{item.name}</span></li>
                <li><label>Position: </label>
                    <span className="changeable" name={item.position} onChange={OnChange}>{item.position}</span></li>
                <li><label>Sumary: </label>
                    <span className="changeable" name={item.summary} onChange={OnChange}>{item.summary}</span></li>
                <li><label>start date: </label>
                    <span className="changeable" name={item.dateFrom} onChange={OnChange}>{item.dateFrom}</span></li>
                <li><label>end date: </label>
                    <span className="changeable" name={item.dateTo} onChange={OnChange}>{item.dateTo}</span></li>
                <button onClick={Delete}>delete</button>
                {editButton}
            </ul>
        </div>
    );
}

export default WorkItem;