import { Component, OnInit } from '@angular/core';
import { PaisService } from 'app/services/pais.service';
import { Pais } from 'app/classes/Pais';

@Component({
    selector: 'app-pais',
    templateUrl: './pais.component.html',
    styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {
    public Nombre = '';
    public Moneda = '';
    public paises: Pais[];
    public keysOfPaises: string[] = ['delete', 'edit', 'PaisID', 'Nombre', 'CodMoneda', 'Moneda', 'FechaUltimaModificacion', 'Activo'];
    public action = 'Add';
    public current: Pais;
    columnNames = [
        {
            id: 'PaisID',
            value: 'ID'
        },
        {
            id: 'Nombre',
            value: 'Nombre'
        },
        {
            id: 'CodMoneda',
            value: 'Código Moneda'
        },
        {
            id: 'Moneda',
            value: 'Moneda'
        },
        {
            id: 'FechaUltimaModificacion',
            value: 'FechaUltimaModificacion'
        },
        {
            id: 'Activo',
            value: 'Activo'
        }
    ];

    constructor(private servicepais: PaisService) {
    }

    ngOnInit() {
        this.servicepais.getPaises().subscribe(
            (response: Array<Pais>) => {
                this.paises = response;
            },
            error => console.log(error)
        );
    }

    public searchPais() {
        this.getPaisesByFilter('name', this.Nombre);
    }

    public getPaisesByFilter(filter: string, value: string) {
        this.paises = this.servicepais.getPaisesByFilter(filter, value);
    }

    public deletePais(tipo: Pais) {
        this.servicepais.deletePais(tipo).subscribe(
            resolve => {
                this.Nombre = '';
                this.Moneda = '';
                this.paises =  resolve;
            },
            error =>  console.log(error)
        );
    }

    public editPais(pais: Pais) {
        this.action = 'Update';

        this.current = pais;
        this.Nombre = pais.Nombre;
        this.Moneda = pais.Moneda;


    }

    public actionPais() {
        if (this.action === 'Add') {
            this.servicepais.addPais(new Pais(0 , this.Nombre, '', this.Moneda, '', true )).subscribe(resolve => {
                this.Nombre = '';
                this.Moneda = '';
                this.paises =  resolve;
            });
        } else {
            this.current.Nombre = this.Nombre;
            this.current.Moneda = this.Moneda;

            this.servicepais.updatePais(this.current).subscribe(
                resolve => {
                    this.current = null;
                    this.Nombre = '';
                    this.Moneda = '';
                    this.action = 'Add';
                    this.paises =  resolve;                },
                error =>  this.action = 'Add'
            );
        }
    }
}
