import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { DataService } from '../../api/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componente: Observable<Componente[]>;

  constructor(private route: NavController, private service: DataService, private menuC: MenuController) { }

  ngOnInit() {
    this.componente = this.service.getMenuOpts();
  }


}
