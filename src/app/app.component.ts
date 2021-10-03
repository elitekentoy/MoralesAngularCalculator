import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIMPLE ANGULAR CALCULATOR';
  firstNum = 0;
  secondNum = 0;
  result = 0;
  theme = 'Dark Mode';

  setOperation(value: string){
    const operation = parseInt(value);

    switch(operation){
      case 1 :this.addition();break;
      case 2: this.subtraction();break;
      case 3: this.multiplication();break;
      case 4: this.division();break;
    }

  }


  setFirstNum(value: string){
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)){
      this.firstNum = parsedInt;
    }
  }

  setSecondNum(value: string){
    const parsedInt = parseInt(value);

    if (!isNaN(parsedInt)){
      this.secondNum = parsedInt;
    }
  }

  addition(){
    this.result = this.firstNum + this.secondNum;
  }
  subtraction(){
    this.result = this.firstNum - this.secondNum;
  }
  multiplication(){
    this.result = this.firstNum * this.secondNum;
  }
  division(){
    this.result = this.firstNum / this.secondNum;
  }

  onClick(){
    if(this.theme === 'Light Mode')
      this.theme = 'Dark Mode';
    else
      this.theme = 'Light Mode';
  }




}
