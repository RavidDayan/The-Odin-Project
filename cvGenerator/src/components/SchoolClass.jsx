import { v4 as uuidv4 } from 'uuid';

export let schoolList = [];

export function deleteSchool(remove){
    schoolList=schoolList.filter(x => { x.key = remove.key });
}
export function addSchool(add){
    schoolList.push(add);
}
class School {
    constructor(name, title, dateFrom, dateTo) {
        this.key = uuidv4();
        this.name = name;
        this.title = title;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }
}
export default School;
schoolList.push(new School(1,2,3,4,5))

