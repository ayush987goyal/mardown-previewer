import { Component, OnInit } from '@angular/core';
import * as Marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputText = '';
  outputText: string = '';

  ngOnInit() {
    Marked.setOptions({
      renderer: new Marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  }

  makeMarked(value) {
    this.outputText = Marked(value);
  }

}
