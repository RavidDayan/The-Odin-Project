import React, { useState } from 'react'
import Work, { workList ,deleteWork} from './WorkClass.jsx'
import WorkItem from './WorkItem.jsx';

function CvSpace() {
    const [workItems, updateWorkItems] = useState(workList);

    function Delete(type, item) {
        if (type == "work") {
            deleteWork(item);
            updateWorkItems(workList);
        }
        if (type == "school") {
            console.log("delete school");
        }
        console.log(workList);
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