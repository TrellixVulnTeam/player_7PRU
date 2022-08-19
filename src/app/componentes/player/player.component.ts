import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() jugador? : any;
  constructor() { }

  @Output() id = new EventEmitter();

  @Output() mifavorito = new EventEmitter();
  @Output() prioridad = new EventEmitter();

  borrar(id: number){
    this.id.emit(id)
  }

  favorito(id: number){
    this.mifavorito.emit(id)
  }

  prioridades(id: number){
    this.prioridad.emit(id)
  }


}
