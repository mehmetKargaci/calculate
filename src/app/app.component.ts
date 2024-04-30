import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  calculateForm!: FormGroup;
  displayInput: string = '';
  result: string = '';

  constructor(){ }

  ngOnInit(): void {
    this.calculateForm = new FormGroup({
      inputData: new FormControl(null, [Validators.pattern(/^[0-9.]+$/)]),
      inputResult: new FormControl(null)

    });
  } 

  pressNum(num: string){   
    console.log(num);
    this.displayInput = this.displayInput + num ;

  } 
    
  pressOperand(operand:string){
    console.log(operand);
    this.displayInput = this.displayInput + operand ;

  }
  getResult(){
    this.result = eval(this.displayInput);
    
  }
  deleteLast(){
    if (this.displayInput != "") {

      this.displayInput = this.displayInput.substring(0, this.displayInput.length - 1)
    }


  }

  deleteAll(){
    this.displayInput = '';
    this.result = '';
    this.calculateForm.reset();
    
  }
}

 




  

