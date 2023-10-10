import React, { useState } from "react";
import { schoolList } from './SchoolClass.jsx'

function SchoolItem({ SchoolDetails, deleteFunc }) {
    const [item, UpdateItem] = useState(SchoolDetails);
    const [editButton, setEditButton] = useState(<button name="editButton" onClick={Edit}>edit</button>);
    let tempItem;

    function Delete() {
        deleteFunc("school", item);
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
        //disable all elements that were enabled
        const currentDiv = document.getElementById(item.key)
        let labels = currentDiv.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = false;
            tempItem[label.getAttribute("name")] = label.textContent;
            console.log(label.textContent);
        });
        //update the item to the new values stored in temp
        UpdateItem(tempItem);
        //set changes to school item in the school list
        schoolList.forEach(school => {
            if (school.key == tempItem.key) {
                school = tempItem;
            }
        })
    }
    return (
        <div key={item.key} id={item.key}>
            <ul>
                <li><label>School: </label>
                    <span className="changeable" name="name" >{item.name}</span></li>
                <li><label>title: </label>
                    <span className="changeable" name="title" >{item.title}</span></li>
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

export default SchoolItem;