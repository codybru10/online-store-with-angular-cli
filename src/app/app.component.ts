import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epicodus Tunes!';

  submitForm(title: string, artist: string, description: string) {
    var newAlbum: Album = new Album(title, artist, description);
    console.log(newAlbum);
  }
}
