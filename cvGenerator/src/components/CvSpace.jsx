import React, { useState } from 'react'
import Work from './WorkClass.jsx'
import WorkItem from './WorkItem.jsx';
import School from './SchoolClass.jsx'
import SchoolItem from './SchoolItem.jsx';
import GeneralInformation from './GeneralInformation.jsx';
import '../style/index.css'

export default CvSpace;

function CvSpace() {
    const [workItems, updateWorkItems] = useState([]);
    const [schoolItems, updateSchoolItems] = useState([]);

    function Delete(type, item) {
        if (type == "work") {
            const updatedList = workItems.filter(work => {
                return work.key != item.key;
            });
            updateWorkItems(updatedList);
        }
        if (type == "school") {
            const updatedList = schoolItems.filter(school => {
                return school.key != item.key;
            });
            updateSchoolItems(updatedList);
        }

    }
    function add(type) {

        if (type == "work") {
            const newWork = new Work(1, 2, 3, 4, 5);
            updateWorkItems([...workItems, newWork]);
        }
        else {
            const newSchool = new School(1, 2, 3, 4);
            updateSchoolItems([...schoolItems, newSchool]);

        }

    }
    function addSchoolButton() {
        add("school");
    }
    function addWorkButton() {
        add("work");
    }
    return (

        <div className='cvSpace m-5 p-3'>
            <div className='row'>
                <GeneralInformation />
            </div>
            <div id="workExperience">
                <div className='row' >
                    <div className='col-10'><h2>work experience:</h2></div>
                    <div className='col-2'>
                        <button onClick={addWorkButton}>add</button>
                    </div>
                </div>
                {workItems.map(x => {
                    return <WorkItem key={x.key} workDetails={x} deleteFunc={Delete} />;
                })}
            </div>
            <div id="education">
            <div className='row' >
            <div className='col-10'><h2>Education:</h2></div>
                    <div className='col-2'>
                    <button onClick={addSchoolButton}>add</button>                    </div>
                </div>
                {schoolItems.map(x => {
                    return <SchoolItem key={x.key} SchoolDetails={x} deleteFunc={Delete} />;
                })}
            </div>
        </div>
    );

}
