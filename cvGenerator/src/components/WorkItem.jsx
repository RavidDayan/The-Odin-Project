import React, { useState } from "react";


function WorkItem({ workDetails, deleteFunc }) {
    const [item, UpdateItem] = useState(workDetails);
    const [editButton, setEditButton] = useState(<button name="editButton" className="btn btn-light" onClick={Edit}>edit</button>);
    let tempItem;

    function Delete() {
        deleteFunc("work", item);
    }
    function Edit() {
        //change edit button to a save button
        setEditButton(<button className="btn btn-light" onClick={Save}>save</button>);
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
        //update the item to the new values stored in temp
        //disable all elements that were enabled
        let labels = document.getElementsByClassName("changeable");
        labels = [...labels];
        labels.forEach(label => {
            label.contentEditable = false;
            tempItem[label.getAttribute("name")] = label.textContent;
            console.log(label.textContent);
        });
        UpdateItem(tempItem);
        //set changes to work item in the work list
        workList.forEach(work => {
            if (work.key == tempItem.key) {
                work = tempItem;
            }
        })
    }
    return (
        <div key={item.key} id={item.key}>
            <div className="row">
                <div className="col-auto">
                    <span className="changeable" name="dateFrom" >{item.dateFrom}</span>
                </div>
                <div className="col-auto">
                    <span>-</span>
                </div>
                <div className="col-auto">
                    <span className="changeable" name="dateTo" >{item.dateTo}</span>
                </div>
                <div className="col-auto">
                    <span>:</span>
                </div>
                <div className="col-auto">
                    <span className="changeable" name="position" >{item.position}</span>
                </div>
                <div className="col-auto">
                    <span>,</span>
                </div>
                <div className="col-auto ">
                    <span className="changeable" name="name" >{item.name}</span>
                </div>
            </div>
            <div>
                <span className="changeable" name="summary" >{item.summary}</span>
            </div>
            <div className=" d-flex justify-content-end">
            <button class="btn btn-danger" onClick={Delete}>delete</button>
            {editButton}
            </div>
        </div >
    );
}

export default WorkItem;