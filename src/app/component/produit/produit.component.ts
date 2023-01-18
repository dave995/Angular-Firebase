import { Component, OnInit } from '@angular/core';
import { Produiction } from '../model/produiction';
import { Data } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produictionList : Produiction[] = [];
  produictionObj : Produiction = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };
  id : string = '';
  first_name = '';
  last_name : '';
  email : '';
  mobile : '';

  constructor(private auth : AuthService, private data : DataService) { }

  ngOnInit(): void {
    this.getAllProduictions();

  }

  getAllProduictions() {
    this.data.getAllProduictions().subscribe(res => {

      this.produictionList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching produit data');
    })


   
  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
  }

  addProduiction() {
     if(this.first_name == '' || this.last_name == '' || this.mobile == ''|| this.email ==  '') {
      alert('fill all in inputs fiels');
      return;
     
     }
     
     this.produictionObj.id = '';
     this.produictionObj.email = this.email;
     this.produictionObj.first_name = this.last_name;
     this.produictionObj.last_name = this.last_name;

     this.data.addProduiction(this.produictionObj);
     this.resetForm();
  }

  updateProduiction() {
   
  }

  deleteProduiction(produiction : Produiction) {
    if (window.confirm('Are you sure you want to delete ' +produiction.first_name + ' ' + produiction.last_name + ' ?')) {
      this.data.deleteProduiction(produiction);
    }
   
  }

}
