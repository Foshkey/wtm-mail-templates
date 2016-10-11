import { CharacterService } from '../common/character.service';
import { Character } from '../models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-top-bar',
  styleUrls: ['top-bar.component.css'],
  templateUrl: 'top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  character: Character;
  logoutUrl = '/logout';
  portraitUrl: string;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characterService.getChar().then(character => {
      this.character = character;
      this.portraitUrl = `//imageserver.eveonline.com/Character/${this.character.CharacterID}_32.jpg`;
    });
  }
}
