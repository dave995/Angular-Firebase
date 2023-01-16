import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Categorie } from 'src/app/model/categorie';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  categoriesList :Categorie[] = [];
  categorieObj : Categorie = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  }
  
  id : string = '';
  first_name : string = '';
  last_name : string = '';
  email : string = '';
  mobile : string = '';

  constructor(private auth  : AuthService, private data : DataService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.data.getAllCategories().subscribe(res => {
       
      this.categoriesList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data ;
      })

    }, err => {
      alert('erreur de votre saisi de donnee categorie');
    }
    )
  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name  = '';
    this.email   = '';
    this.mobile  = '';
  }
  
  addCategorie() {

    if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
      alert('vous avez oublier de saisir');
      return;
    }

    this.categorieObj.id = '';
    this.categorieObj.email = this.email;
    this.categorieObj.first_name = this.first_name;
    this.categorieObj.last_name = this.last_name;

    this.data.addCategorie(this.categorieObj)
    this.resetForm();
   
    
  }

  updateCategorie() {

  }
  deleteCategorie(categorie : Categorie) {
    if(window.confirm('etes vous sure de vouloire supprimer '+categorie.first_name+' '+categorie.last_name+' ?')) {
      this.data.deleteCategorie(categorie);
    }
   
  }
}
