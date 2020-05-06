import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from "@ngrx/store";
import * as createAction from "../store/entities.action";

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.css']
})
export class CreateEntityComponent implements OnInit {
/* 
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
  } */


  assetForm: FormGroup;
  private asset;
  //@ViewChild(FileUploadComponent) private upload: FileUploadComponent;
  constructor(private fb: FormBuilder,private http:HttpClient,private _snackBar: MatSnackBar, private store:Store) {   
  }

  ngOnInit(){
    this.prepareForm() ;   
  }
  prepareForm(){
    this.assetForm = this.fb.group({
      AssetName: ['', Validators.required],
      Topic:['', Validators.required],
      Tag:['', Validators.required],
      image:['',Validators.required],
      sdate:['',Validators.required],
      /* dynamicFields:this.fb.array([this.initAssetAttributes()])  */   
    });

    //this.upload.writeValue(null);
  }

  initAssetAttributes(){
    return this.fb.group({
      // list all your form controls here, which belongs to your form array
      assetFieldName: [''],
      assetFieldValue: [''],
     
    });
  }

  addNewRow() {
    const control = <FormArray>this.assetForm.controls['dynamicFields'];
    // add new formgroup
    control.push(this.initAssetAttributes());

  }
  deleteRow(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.assetForm.controls['dynamicFields'];
    // remove the chosen row
    control.removeAt(index);
  }

  createAsset(){
   /*  let arr=this.assetForm.value.dynamicFields;
    var arryofObj = [];
    for(var i=0;i<arr.length;i++){
       fun1(arr[i].assetFieldName,arr[i].assetFieldValue)              
    }
    function fun1(key,val){
     var o={};
     o[key] =val;
     arryofObj.push(o);
    } */

    this.asset ={
      AssetName:this.assetForm.value.AssetName,
      Topic:this.assetForm.value.Topic.split(' '),
      Tag:this.assetForm.value.Tag,
      uploadedfile:this.assetForm.value.image,
      maintenanceSchedule:this.assetForm.value.sdate,
      //OptionalAttributes: arryofObj
    }

     console.log('-------------->',this.asset)
    this.http.post('myurl',this.toFormData(this.asset)).subscribe(res =>{
      this._snackBar.open("Asset created with hash successfully",'Undo', {
        duration: 3000,
      });
      this.assetForm.reset();
    })
 
  }

  toFormData<T>( formValue: T ) {

   
    const formData = new FormData();
   
    
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
     
      if(key === 'OptionalAttributes'){
        formData.append(key, JSON.stringify(value));
      }
      else if(key == 'uploadedfile'){
        for (let i = 0; i < value.length; i++) { 
          formData.append(key, value[i]);
        }
       }
      else{
        formData.append(key, value);
      }
     
    }
    
    return formData;
  }

  resetForm(form: FormGroup) {
    //this.prepareForm();
    this.assetForm.reset();
  }


  createAssetEntity(){
    console.log('--------->creating entity')
    this.store.dispatch(new createAction.BeginCreateEnity());
    this.store.subscribe(state => {
      console.log('-------------->store response' ,state['entities'].entities.data);
    })
  }

}
