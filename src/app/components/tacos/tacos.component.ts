import { Component, OnInit } from '@angular/core';
import { TacosService } from 'app/services/tacos.service';
import { TipoTaco } from 'app/classes/TipoTaco';

@Component({
    selector: 'app-tacos',
    templateUrl: './tacos.component.html',
    styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
    public name = '';
    public description = '';
    public tipoDeTacos: TipoTaco[];
    public keysOfTacos: string[] = ['delete', 'edit', 'id', 'name', 'description'];
    public action = 'Add';
    public currentID: number;
    columnNames = [
        {
            id: 'id',
            value: 'ID'
        },
        {
            id: 'name',
            value: 'Name'
        },
        {
            id: 'description',
            value: 'Description'
        }
    ];

    constructor(private servicetacos: TacosService) {
    }

    ngOnInit() {
        this.servicetacos.getTacos().subscribe(
            (response: Array<TipoTaco>) => {
                this.tipoDeTacos = response;
            },
            error => console.log(error)
        );
    }

    public searchTaco() {
        this.getTacosByFilter('name', this.name);
    }

    public getTacosByFilter(filter: string, value: string) {
        this.tipoDeTacos = this.servicetacos.getTacosByFilter(filter, value);
    }

    public deleteTaco(tipo: TipoTaco) {
        this.servicetacos.deleteTaco(tipo).subscribe(
            resolve => {
                this.name = '';
                this.description = '';
                this.tipoDeTacos =  resolve;
            },
            error =>  console.log(error)
        );
    }

    public editTaco(tipo: TipoTaco) {
        this.action = 'Update';

        this.currentID = tipo.id;
        this.name = tipo.name;
        this.description = tipo.description;
    }

    public actionTaco() {
        if (this.action === 'Add') {
            this.servicetacos.addTaco(new TipoTaco(0, this.name, this.description)).subscribe(resolve => {
                this.name = '';
                this.description = '';
                this.tipoDeTacos =  resolve;
            });
        } else {
            this.servicetacos.updateTaco(new TipoTaco(this.currentID, this.name, this.description)).subscribe(
                resolve => {
                    this.currentID = null;
                    this.name = '';
                    this.description = '';
                    this.action = 'Add';
                    this.tipoDeTacos =  resolve;                },
                error =>  this.action = 'Add'
            );
        }
    }
}
