import { Injectable } from '@angular/core';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places: Place[] = [
  new Place(
    'p1',
    'Manhattan Mansion',
    'In the heart of New York City.',
    'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/james-b-duke-house2.jpg',
    149.99
  ),
  new Place(
    'p2',
    'L\'Amour Toujours',
    'A romantic place in Paris!',
    'https://img.traveltriangle.com/blog/wp-content/uploads/2017/03/most-romantic-restaurants-in-paris.jpg',
    189.99
  ),
  new Place(
    'p3',
    'The Foggy Palace',
    'Not your average city trip!',
    'https://i1.wp.com/visitesva.com/wp-content/uploads/2021/09/foggy-place-featured-image.png?resize=768%2C432&ssl=1',
    99.99
  )
];
get places(){
  //eslint-disable-next-line no-underscore-dangle
  return[...this._places];
}
getplace(id: string){
  //eslint-disable-next-line no-underscore-dangle
return{...this._places.find(p => p.id === id)};
}
  //eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() { }
}
