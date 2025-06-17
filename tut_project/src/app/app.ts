import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from "./common_ui/profile-card/profile-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '123';
}
