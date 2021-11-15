import { Component } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

areaOfExpertises = ['Frontend', 'Backend', 'Full Stack'];

model = new Person(18, 'Full name here', this.areaOfExpertises[0], 'C#');

submitted = false;

onSubmit() { this.submitted = true; }


newPerson() {
this.model = new Person(42, '', '');
}

skyDog(): Person {
const myPerson =  new Person(42, 'SkyDog',
                 'Fetch any object at any distance',
                 'Leslie Rollover');
console.log('My hero is called ' + myPerson.name); // "My hero is called SkyDog"
return myPerson;
}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
return form && form.controls.name &&
form.controls.name.value; // Dr. IQ
}

}
