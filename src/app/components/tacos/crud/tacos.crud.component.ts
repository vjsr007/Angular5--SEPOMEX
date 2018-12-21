import { Component, OnInit, Input } from '@angular/core';
import { TacosService } from 'app/services/tacos.service';
import { TipoTaco } from 'app/classes/TipoTaco';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-editar-tacos',
    templateUrl: './tacos.crud.component.html',
    styleUrls: ['./tacos.crud.component.scss']
})
export class TacosCrudComponent implements OnInit {
    private tipoTaco: TipoTaco = new TipoTaco(0, '', '');
    private titulo = '';
    private accion = '';

    constructor(private servicetacos: TacosService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.titulo = 'Editar Taco';
                this.accion = 'editar';
                this.servicetacos.getTacosById(id).subscribe(
                    resolve => {
                        this.tipoTaco = resolve;
                    },
                    error =>  console.log(error)
                );
            } else {
                this.accion = 'agregar';
                this.titulo = 'Agregar Taco';
            }
        });
    }

    ngOnInit() {
    }

    public guardar() {
        if (this.accion === 'editar') {
            this.editar();
        } else {
            this.agregar();
        }
    }

    public editar() {
        this.servicetacos.updateTaco(this.tipoTaco).subscribe(
            resolve => {
                this.router.navigate(['/tacos']);
            },
            error =>  console.log(error)
        );
    }

    public agregar() {
        this.servicetacos.addTaco(this.tipoTaco).subscribe(
            resolve => {
                this.router.navigate(['/tacos']);
            },
            error =>  console.log(error)
        );
    }

    public cancelar() {
        this.router.navigate(['/tacos']);
    }
}
