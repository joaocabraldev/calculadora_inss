import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'calculadora-inss-ng';
  defPrompt;
  showInstallBtn = false;

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.defPrompt = e;
      this.showInstallBtn = true;
      console.log(this.defPrompt);
    });
  }

  showInstallButton(): boolean {
    return this.showInstallBtn;
  }

  installPwa(): void {
    this.defPrompt.prompt();
    this.defPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.defPrompt = null;
    });
  }

}
