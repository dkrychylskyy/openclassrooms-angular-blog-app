import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Blog App';

  posts = [
    new Post("Mon premier post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida dolor accumsan urna varius fermentum. In sodales vitae massa sed imperdiet. Praesent sed risus sed erat tincidunt volutpat. "),
    new Post("Mon deuxième post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida dolor accumsan urna varius fermentum. In sodales vitae massa sed imperdiet. Praesent sed risus sed erat tincidunt volutpat. "),
    new Post("Mon encore un post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida dolor accumsan urna varius fermentum. In sodales vitae massa sed imperdiet. Praesent sed risus sed erat tincidunt volutpat. ")
  ];

  ngOnInit(): void {

  }

}
