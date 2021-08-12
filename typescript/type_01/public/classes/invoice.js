//classes (readonly, private, public)
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} own  ${this.amount} for ${this.details}`;
    }
}
