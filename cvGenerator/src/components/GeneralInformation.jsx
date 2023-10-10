import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function GeneralInformation() {
    const [item, UpdateItem] = useState({ key:uuidv4(), name:"",email:"",phone:"",about:""});
    const [editButton, setEditButton] = useState(<button name="editButton" onClick={Edit}>edit</button>);
    let tempItem;

    function Edit() {
        //change edit button to a save button
        setEditButton(<button onClick={Save}>save</button>);
        //give temp item the current values of item
        tempItem = item;
        //enable all elements fields to editable
        const currentDiv=document.getElementById(item.key)
        let labels = currentDiv.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = true;
        });
    }
    function Save() {
        //change save button to an edit button
        setEditButton(<button onClick={Edit}>edit</button>);
        //disable all elements that were enabled
        const currentDiv=document.getElementById(item.key)
        let labels = currentDiv.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = false;
            tempItem[label.getAttribute("name")]=label.textContent;
        });
        //update the item to the new values stored in temp
        console.log(tempItem);
        UpdateItem(tempItem);
    }

    return (
        <div key={item.key} id={item.key}>
            <ul>
                <li><label>name: </label>
                    <span className="changeable" name="name" >{item.name}</span></li>
                <li><label>email: </label>
                    <span className="changeable" name="email" >{item.title}</span></li>
                <li><label>phone number: </label>
                    <span className="changeable" name="phone" >{item.dateFrom}</span></li>
                <li><span className="changeable" name="about" >{item.dateTo}</span></li>
                {editButton}
            </ul>
        </div>
    );
}

export default GeneralInformation;