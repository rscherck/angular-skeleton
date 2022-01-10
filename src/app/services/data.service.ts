import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  constructor() {}

  data = ['Jeep', 'Chevy', 'Ford', 'Buick', 'Honda', 'Hummer', 'Ferrari'];


  cardData = [
    {
      'title': 'Something 1',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image1.jpg'
    },
    {
      'title': 'Something 2',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image2.jpg'
    },
    {
      'title': 'Something 3',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image3.jpg'
    },
    {
      'title': 'Something 4',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image2.jpg'
    },
    {
      'title': 'Something 5',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image3.jpg'
    },
    {
      'title': 'Something 6',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image1.jpg'
    },
    {
      'title': 'Something 7',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image3.jpg'
    },
    {
      'title': 'Something 8',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image1.jpg'
    },
    {
      'title': 'Something 9',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image2.jpg'
    },
    {
      'title': 'Something 10',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image1.jpg'
    },
    {
      'title': 'Something 11',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image3.jpg'
    },
    {
      'title': 'Something 15',
      'description' : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      'image' : '../../assets/image3.jpg'
    }
  ];


  getMyData() {
    return this.cardData;
  }
}
