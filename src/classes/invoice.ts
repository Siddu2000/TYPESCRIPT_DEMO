export class Invoice {
    //  client:string;
    //  details:string;
    //  amount:Number;
    //   constructor(c:string,b:string,a:number){
    //      this.client=c;
    //      this.details=b;
    //      this.amount=a
    //   }
    constructor(
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format():string {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  
 }