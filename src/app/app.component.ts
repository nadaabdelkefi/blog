import { Component } from '@angular/core';
import { Post } from './Post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  posts:Post []=[
    {
  title: 'Mon premier poste',
  content: 'uhsqkxjsqkw<nk' ,
  loveIts:  2,
  created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'uhsqkxjsqkw<nk' ,
      loveIts:  4,
      created_at: new Date()
        },

        {
          title: 'Encore un post',
          content: 'uhsqkxjsqkw<nk' ,
          loveIts:  1,
          created_at: new Date()
            },
    

  ]


}
