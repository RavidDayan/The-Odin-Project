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
            const newWork = new Work('company name', 'position', 'summary', 'start', 'end');
            updateWorkItems([...workItems, newWork]);
        }
        else {
            const newSchool = new School('school name', 'title', 'start', 'end');
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
        <div className='row m-5 p-3 '>
        <div className='col-xl-2'></div>
        <div className='cvSpace col-xl-8 '>
            <div className='row'>
                <GeneralInformation />
            </div>
            <div id="workExperience" className='border-top border-2 my-3 py-3'>
                <div className='row' >
                    <div className='col-10'><h3>work experience:</h3></div>
                    <div className='col-2 d-flex justify-content-end'>
                        <button class="btn btn-success" onClick={addWorkButton}>add</button>
                    </div>
                </div>
                {workItems.map(x => {
                    return <WorkItem key={x.key} workDetails={x} deleteFunc={Delete} />;
                })}
            </div>
            <div id="education" className='border-top border-2 py-3 my-3'>
            <div className='row mt-3' >
            <div className='col-10'><h3>Education:</h3></div>
                    <div className='col-2 d-flex justify-content-end'>
                    <button class="btn btn-success" onClick={addSchoolButton}>add</button>                    </div>
                </div>
                {schoolItems.map(x => {
                    return <SchoolItem key={x.key} SchoolDetails={x} deleteFunc={Delete} />;
                })}
            </div>
        </div>
        <div className='col-xl-2'></div>
        </div>

    );

}
