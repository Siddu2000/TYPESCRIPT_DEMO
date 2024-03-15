// import { renderFormDataFromLocalStorage } from "../sandbox";
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        console.log(item, "it");
        console.log(heading, "head");
        const p = document.createElement('p');
        p.innerText = item === null || item === void 0 ? void 0 : item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
