import { workExperienceList } from './WorkExperienceList.jsx'
import WorkData from './WorkExperienceList.jsx'
import { useState } from 'react';
import React from 'react';


function WorkExperienceForm() {
    const [formData, fetchFormData] = useState({
        companyName: "",
        positionTitle: "",
        workSummary: "",
        workDateFrom: "",
        workDateTo: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        fetchFormData(values => ({ ...values, [name]: value }))
    }

    const handleClick = (e) => {
        e.preventDefault();
        const { companyName, positionTitle, workSummary, workDateFrom, workDateTo } = formData;
        workExperienceList.push(new WorkData(companyName, positionTitle, workSummary, workDateFrom, workDateTo));
        console.log(workExperienceList);
    }
    return (
        <>
            <form >
                <label>companyName</label>
                <input type="text" name="companyName" onChange={handleChange}></input>
                <label>Title</label>
                <input type="text" name="positionTitle" onChange={handleChange}></input>
                <label>Summary</label>
                <input type="text" name="workSummary" onChange={handleChange}></input>
                <label>Starting date</label>
                <input type="date" name="workDateFrom" onChange={handleChange}></input>
                <label>End date</label>
                <input type="date" name="workDateTo" onChange={handleChange}></input>
                <button onClick={handleClick}>Add</button>
            </form>
        </>
    );
}

export default WorkExperienceForm;