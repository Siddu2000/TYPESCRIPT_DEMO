import { ListTemplate } from "./classes/ListTemplets.js";
import {Invoice} from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
// const names ="perry";
// console.log(names);

//cnamelasess
// class Invoice {
//     client:string;
//     details:string;
//     amount:Number;
//      constructor(c:string,b:string,a:number){
//         this.client=c;
//         this.details=b;
//         this.amount=a
//      }
//    constructor( 
//      readonly client:string,
//      public details:string,
//       private amount:Number,){}

//      format(){
//         return `${this.client} got amount ${this.amount} for ${this.details}`
//      }
 
// }
//  const invone=new Invoice("womg chang","changmang",2000);
//  const intwo=new Invoice('changli','mong wong',50000);

//  const invoices:Invoice[]=[];
//  invoices.push(invone);
//  invoices.push(intwo);
//  invoices.forEach(inv=>{
//     console.log(inv.client,inv.details , inv.format());
    
//  })


//input
const form=document.querySelector('.new-item-form')as HTMLFormElement
const type=document.querySelector('#type') as HTMLSelectElement
const toform=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement
// console.log(form);
// console.log(type,"type");

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// function saveFormDataToLocalStorage(doc: HasFormatter, type: string) {
//    // Get existing data from local storage or initialize an empty array
//    let storedData: { doc: HasFormatter, type: string }[] = JSON.parse(localStorage.getItem('formData') || '[]');
   
//    // Add new data to the array
//    storedData.push({ doc, type });
//    console.log(storedData,"store");
                                                                                                                                                                                                                     
   
   
//    // Save the updated array to local storage
//    localStorage.setItem('formData', JSON.stringify(storedData));
// }

// Function to retrieve and render form data from local storage
// export function renderFormDataFromLocalStorage() {
//    // Get data from local storage
//    try {
//       // Get data from local storage
//       let storedData: { doc: HasFormatter, type: string }[] = JSON.parse(localStorage.getItem('formData') || '[]');

//       // Log the retrieved data
//       console.log("Retrieved Data:", storedData);

//       // Render each saved data
//       storedData.forEach(item => {
//           list.render(item.doc, item.type, 'end');
//       });
//   } catch (error) {
//       console.error("Error retrieving data from local storage:", error);
//   }
// }
// console.log(renderFormDataFromLocalStorage(),"rend");


form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice') {
      doc = new Invoice(toform?.value, details?.value, amount?.valueAsNumber);
    } else {
      doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
form.reset();

// amount.value=''
// saveFormDataToLocalStorage(doc, type.value);
   
    list.render(doc, type.value, 'end');
    
});
// window.addEventListener('load', renderFormDataFromLocalStorage);
