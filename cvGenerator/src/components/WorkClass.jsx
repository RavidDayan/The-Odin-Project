import { v4 as uuidv4 } from 'uuid';

class Work {
    constructor(name, position, summary, dateFrom, dateTo) {
        this.key = uuidv4();
        this.name = name;
        this.position = position;
        this.summary = summary;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }
}
export default Work;

