
    import { HasFormatter } from "../interfaces/HasFormatter";
    // import { renderFormDataFromLocalStorage } from "../sandbox";

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');
  
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);
console.log(item,"it");
console.log(heading,"head");

    const p = document.createElement('p');
    p.innerText = item?.format();
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
