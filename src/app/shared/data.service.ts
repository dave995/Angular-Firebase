import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Produiction } from '../component/model/produiction';
import { Categorie } from '../model/categorie';
import { FileMetaData } from '../model/file-meta-data';
import { Student } from '../model/student';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add student
  addStudent(student : Student) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student) {
     this.afs.doc('/Students/'+student.id).delete();
  }

  // update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
 
  //add categories
  addCategorie(Categorie  : Categorie) {
    Categorie.id = this.afs.createId();
    return this.afs.collection('/categories').add(Categorie);
  }

  //get all categories
  getAllCategories() {
    return this.afs.collection('/categories').snapshotChanges();
  }
  //delete categorie
  deleteCategorie(categorie : Categorie) {
    return this.afs.doc('/categories'+categorie.id).delete();
  }
  //update categorie
  updateCategorie(categorie : Categorie) {
    this.deleteCategorie(categorie);
    this.addCategorie(categorie);
  }

  // add produit
  addProduiction(produiction : Produiction) {
    produiction.id = this.afs.createId();
    return this.afs.collection('/Produictions').add(produiction);
  }

  //get all produits
  getAllProduictions() {
    return this.afs.collection('/Produictions').snapshotChanges();
  }

  //delete produit
  deleteProduiction(produiction : Produiction) {
    return this.afs.doc('/Produiction/'+produiction.id).delete();
  }

  //update produiction
  updateProduiction(produiction : Produiction) {
    this.deleteProduiction(produiction);
    this.addProduiction(produiction);
  }
  
}
