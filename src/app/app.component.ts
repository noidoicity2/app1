import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>wellcome {{title}} </h1>
  <div class = 'container'>
  <img  src={{img}}>


  <h2> Name : {{ person.name }} </h2>
  <h2> Friend List </h2>
    // tslint:disable-next-line:max-line-length
  <li *ngFor=" let f of friend"> <span class= "sp1">{{f.name}} : </span> <span class= "sp2">age </span> :{{f.age}} , <span class= "sp1">address </span> : {{f.address}} </li>
  </div>
 <app-test1></app-test1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dat \'s profile';
  person = {
    name: 'dat',
    lastname: 'van',
    age: 100,
    address: 'ha noi'
  };
  friend = [
    {name: 'Dog', lastname: 'van', age: 100, address: 'ha noi'},
    {name: 'cat', lastname: 'fck', age: 50, address: 'hai phong'}
  ];
  img = 'https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg';


}
