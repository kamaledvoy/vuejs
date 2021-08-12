import { HasFormatter } from '../interfaces/HasFormatter.js';


//classes (readonly, private, public)
export class Invoice implements HasFormatter {  
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format(){
        return `${this.client} own  ${this.amount} for ${this.details}`;
    }
}
