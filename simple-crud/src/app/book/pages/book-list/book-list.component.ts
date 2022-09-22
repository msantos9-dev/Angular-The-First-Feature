import { Component, OnInit } from '@angular/core';
import { Book } from '../../models';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {

    book: Book[]= [
      {
        id : '',
        name : '1000 Years of Joys and Sorrows',
        author : 'Ai Weiwei',
        isbn :  '0553419463',
        src : "https://images-na.ssl-images-amazon.com/images/I/51ttp1m0o7L._SX327_BO1,204,203,200_.jpg"
      },
  
      {
        id : '',
        name : 'Acts of Desperation ',
        author : 'Megan Nolan',
        isbn :  '0316429856',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41phwHkJthL._SX329_BO1,204,203,200_.jpg'
      },
  
      {
        id : '',
        name : 'A Certain Hunger ',
        author : 'Chelsea G. Summers',
        isbn :  '1951213432',
        src : 'https://images-na.ssl-images-amazon.com/images/I/51uTDxhnRdS._SX322_BO1,204,203,200_.jpg'
      },
  
      {
        id : '',
        name : 'The Latinist: A Novel ',
        author : 'Mark Prins',
        isbn :  '132403680X',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41blJc0JSCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
      },
  
      {
        id : '',
        name : 'Imposter',
        author : 'Bradeigh Godfrey',
        isbn :  '1665055189',
        src : "https://images-na.ssl-images-amazon.com/images/I/41B-Kx02w+L._SX311_BO1,204,203,200_.jpg"
      },
  
      {
        id : '',
        name : 'Toxic Effects (Memory Thieves Series, Book 2)',
        author : 'Joel Shulkin',
        isbn :  '1094022888',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41GrevUbxSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
      },
  
      {
        id : '',
        name : 'Livid: A Scarpetta Novel (Kay Scarpetta, 26)',
        author : 'Patricia Cornwell',
        isbn :  '1538725169',
        src : 'https://images-na.ssl-images-amazon.com/images/I/51UCA3pQNcL._SX329_BO1,204,203,200_.jpg'
      },
  
      {
        id : '',
        name : "'The Assassin's Betrayal: CIA Assassin'",
        author : ' Auston King ',
        isbn :  ' 979-8555486158',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41CD4dlZN-L._SX331_BO1,204,203,200_.jpg'
      }
      
    ];
    
    isShowing = true;
  
    addToReadingList(event:Book){
      console.log(event);
    }
  constructor() { }

  readingList: Book[] = [];

  ngOnInit(): void {
  }

}
