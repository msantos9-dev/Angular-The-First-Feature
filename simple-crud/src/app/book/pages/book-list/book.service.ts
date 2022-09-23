import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() {}

  getBookList() {
    return [
      {
        id : 'BL-001',
        name : '1000 Years of Joys and Sorrows',
        author : 'Ai Weiwei',
        isbn :  '0553419463',
        src : "https://images-na.ssl-images-amazon.com/images/I/51ttp1m0o7L._SX327_BO1,204,203,200_.jpg"
      },
  
      {
        id : 'BL-002',
        name : 'Acts of Desperation ',
        author : 'Megan Nolan',
        isbn :  '0316429856',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41phwHkJthL._SX329_BO1,204,203,200_.jpg'
      },
  
      {
        id : 'BL-003',
        name : 'A Certain Hunger ',
        author : 'Chelsea G. Summers',
        isbn :  '1951213432',
        src : 'https://images-na.ssl-images-amazon.com/images/I/51uTDxhnRdS._SX322_BO1,204,203,200_.jpg'
      },
  
      {
        id : 'BL-004',
        name : 'The Latinist: A Novel ',
        author : 'Mark Prins',
        isbn :  '132403680X',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41blJc0JSCL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
      },
  
      {
        id : 'BL-005',
        name : 'Imposter',
        author : 'Bradeigh Godfrey',
        isbn :  '1665055189',
        src : "https://images-na.ssl-images-amazon.com/images/I/41B-Kx02w+L._SX311_BO1,204,203,200_.jpg"
      },
  
      {
        id : 'BL-006',
        name : 'Toxic Effects (Memory Thieves Series, Book 2)',
        author : 'Joel Shulkin',
        isbn :  '1094022888',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41GrevUbxSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
      },
  
      {
        id : 'BL-007',
        name : 'Livid: A Scarpetta Novel (Kay Scarpetta, 26)',
        author : 'Patricia Cornwell',
        isbn :  '1538725169',
        src : 'https://images-na.ssl-images-amazon.com/images/I/51UCA3pQNcL._SX329_BO1,204,203,200_.jpg'
      },
  
      {
        id : 'BL-008',
        name : "'The Assassin's Betrayal: CIA Assassin'",
        author : ' Auston King ',
        isbn :  ' 979-8555486158',
        src : 'https://images-na.ssl-images-amazon.com/images/I/41CD4dlZN-L._SX331_BO1,204,203,200_.jpg'
      }
      
    ];
  }
}
