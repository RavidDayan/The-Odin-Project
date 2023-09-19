export const workExperienceList=[];
import { v1 as uuidv1 } from 'uuid';

class WorkData{
    constructor(companyName,positionTitle,workSummary,workDateFrom,workDateTo){
    this.companyName=companyName;
    this.positionTitle=positionTitle;
    this.workSummary=workSummary;
    this.workDateFrom=workDateFrom;
    this.workDateTo=workDateTo;
    this.key=uuidv1();
}
}
export default WorkData;
