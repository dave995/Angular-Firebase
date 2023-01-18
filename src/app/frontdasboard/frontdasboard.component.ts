import { Component, OnInit } from '@angular/core';
import { Produiction } from '../component/model/produiction';
import { Categorie } from '../model/categorie';
import { Student } from '../model/student';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-frontdasboard',
  templateUrl: './frontdasboard.component.html',
  styleUrls: ['./frontdasboard.component.css']
})
export class FrontdasboardComponent implements OnInit {
  produictionList : Produiction[] = [];
  studentsList: Student[] = [];
  categoriesList :Categorie[] = [];
  constructor(private auth : AuthService, private data : DataService) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.getAllProduictions();
    this.getAllCategories()
  }
  getAllStudents() {

    this.data.getAllStudents().subscribe(res => {

      this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
    
      })

    }, err => {
      alert('Error while fetching student data');
    })

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

}
