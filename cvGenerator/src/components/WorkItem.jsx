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
        //change edit button to a save button
        setEditButton(<button onClick={Save}>save</button>);
        //give temp item the current values of item
        tempItem = item;
        //enable all elements fields to editable
        let labels = document.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = true;
        });
    }
    function Save() {
        //change save button to an edit button
        setEditButton(<button onClick={Edit}>edit</button>);
        //update the item to the new values stored in temp
        //disable all elements that were enabled
        let labels = document.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = false;
            tempItem[label.getAttribute("name")]=label.textContent;
            console.log(label.textContent);
        });
        UpdateItem(tempItem);
        //set changes to work item in the work list
        workList.forEach(work=>{
            if(work.key==tempItem.key){
                work=tempItem;
            }
        })
    }

    return (
        <div key={item.key} id={item.key}>
            <ul>
                <li><label>Company name: </label>
                    <span className="changeable" name="name" >{item.name}</span></li>
                <li><label>Position: </label>
                    <span className="changeable" name="position" >{item.position}</span></li>
                <li><label>Sumary: </label>
                    <span className="changeable" name="summary" >{item.summary}</span></li>
                <li><label>start date: </label>
                    <span className="changeable" name="dateFrom" >{item.dateFrom}</span></li>
                <li><label>end date: </label>
                    <span className="changeable" name="dateTo" >{item.dateTo}</span></li>
                <button onClick={Delete}>delete</button>
                {editButton}
            </ul>
        </div>
    );
}

export default WorkItem;