import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




class Test {

  constructor(public zahl: number = 0) {
    console.error('Hallo Welt!! 😀', this.zahl)
  }

  public blubb() { }
}


const test = new Test(42);
test.blubb();
