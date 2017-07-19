import { Component } from '@angular/core';

class Contact {
    name : string;
    email : string;
}

@Component({
    selector: 'structural-directive',
    templateUrl: './structural-directive.component.html',
    styleUrls: ['./structural-directive.component.css']
})



export class StructuralDirective {
    //isShown = true;

    /*toggleThingy(){
        this.isShown = !this.isShown;
    }*/

    /*language = "";
    languages = [
        {name: 'English', code: 'en'},
        {name: 'Japanese', code: 'jp'},
        {name: 'Korean', code: 'kr'}
    ];*/

    contacts: Contact[] = [];
    currentContact =  new Contact();

    save(){
        this.contacts.push(this.currentContact);
        this.currentContact = new Contact();
    }
   
    isValid() : boolean {
        return !!this.currentContact.name && !!this.currentContact.email;
    }
}