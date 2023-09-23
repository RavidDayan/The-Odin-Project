import React, { useState } from 'react'
import Work, { workList } from './WorkClass.jsx'
import WorkItem from './WorkItem.jsx';

function CvSpace() {
    const [workItems, updateWorkItems] = useState(workList);

    function Delete(type, item) {
        if (type == "work") {
            updateWorkItems(workItems.filter(x => { x.key = item.key }));
        }
        if (type == "school") {
            console.log("delete school");
        }
    }
    function AddButtonFunc(){
        
    }


    return (

        <div className='cvSpace'>
            {workItems.map(x => {
                return <WorkItem workDetails={x} deleteFunc={Delete} />;
            })}
        </div>
    );

}

export default CvSpace;