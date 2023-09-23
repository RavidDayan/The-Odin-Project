import React from "react";
import { v4 as uuidv4 } from 'uuid';

const workList = [];

class work {
    constructor(name, position, summary, dareFrom, dateTo) {
        this.key = uuidv4();
        this.name = name;
        this.position = position;
        this.summary = summary;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }
}