import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-remember-random-images-screen',
  templateUrl: './remember-random-images-screen.component.html',
  styleUrls: ['./remember-random-images-screen.component.scss']
})
export class RememberRandomImagesScreenComponent implements OnInit {
  randomImageSource: string;

  constructor() { }

  ngOnInit() {
    const fiveSeconds = 5000;
    const numberOfImages = 2 + 1;
    const numberOfSubImages = 4 + 1;
    interval(fiveSeconds).pipe(
      tap(() => {
        const randomImage = Math.floor(Math.random() * (numberOfImages - 1) + 1);
        const randomSubImage = Math.floor(Math.random() * (numberOfSubImages - 1) + 1);
        this.randomImageSource = `assets/images/${randomImage}-${randomSubImage}.jpg`;
      }),
    ).subscribe();
  }

}
