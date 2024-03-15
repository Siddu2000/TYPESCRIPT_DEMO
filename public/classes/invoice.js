export class Invoice {
    //  client:string;
    //  details:string;
    //  amount:Number;
    //   constructor(c:string,b:string,a:number){
    //      this.client=c;
    //      this.details=b;
    //      this.amount=a
    //   }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
