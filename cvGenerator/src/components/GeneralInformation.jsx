import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default GeneralInformation;

function GeneralInformation() {
    const [item, UpdateItem] = useState({ key: uuidv4(), name: "name", email: "e-mail", phone: "phone", about: "about you", github: "github account" });
    const [editButton, setEditButton] = useState(<button className="btn btn-light " name="editButton" onClick={Edit}>edit</button>);
    let tempItem;

    function Edit() {
        //change edit button to a save button
        setEditButton(<button onClick={Save}>save</button>);
        //give temp item the current values of item
        tempItem = item;
        //enable all elements fields to editable
        const currentDiv = document.getElementById(item.key)
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
        const currentDiv = document.getElementById(item.key)
        let labels = currentDiv.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = false;
            tempItem[label.getAttribute("name")] = label.textContent;
        });
        //update the item to the new values stored in temp
        console.log(tempItem);
        UpdateItem(tempItem);
    }

    return (
        <div key={item.key} id={item.key} className="mt-3">
            <div className="row">
                <span className="text-center text-uppercase fw-bold fs-4 changeable col-12" name="name" >{item.name}</span>
            </div>
            <div className="row m-3">
                <div className="col-4 text-center">
                    <label className="fw-bold">email: </label>
                    <span className="changeable" name="email" >{item.email}</span>
                </div>
                <br />
                <div className="col-4 text-center">
                    <label className="fw-bold">Phone: </label>
                    <span className="changeable" name="phone" >{item.phone}</span>
                </div>
                <div className="col-4 text-center">
                    <label className="fw-bold">GitHub: </label>
                    <span className="changeable" name="github" >{item.github}</span>
                </div>
            </div>
            <div className="row border-top border-2">
                <span className="changeable" name="about" >{item.about}</span>
            </div>
            <div className=" d-flex justify-content-end">
                {editButton}
            </div>
        </div >
    );
}
