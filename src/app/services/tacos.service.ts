import { Injectable } from '@angular/core';
import { TipoTaco } from '../classes/TipoTaco';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TacosService {
    private tipoDeTacos: Array<TipoTaco>;
    private apiUrl = 'http://localhost:20923/api/';

    constructor(private http: HttpClient) {
    }

    public getTacos(): Observable<(Array<TipoTaco>)> {
        return new Observable((observer) => {
            this.http
            .get(this.apiUrl + 'tacos/', {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<TipoTaco>) => {
                    this.tipoDeTacos = response;
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }

    public getKeys(): Promise<(Array<string>)> {
        return new Promise((resolve, reject) => {
            this.http
            .get(this.apiUrl + 'tacos/', {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<TipoTaco>) => {
                    resolve(response.length > 0 ? Object.keys(response[0]) : []);
                },
                error => reject(error)
            );
        });
    }

    public getTacosByDescription(description: string): Array<TipoTaco> {
        return this
                .tipoDeTacos
                .filter(t =>
                    t.description.toLowerCase().indexOf(description.toLowerCase()) >= 0 || description === ''
                );
    }

    public getTacosByName(name: string): Array<TipoTaco> {
        return this
            .tipoDeTacos
            .filter(t =>
                t.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 || name === ''
            );
    }

    public getTacosByFilter(filter: string, value: string): Array<TipoTaco> {
        let Tacos: Array<TipoTaco>;
        switch (filter) {
            case 'name':
                Tacos = this.getTacosByName(value);
                break;
            case 'description':
                Tacos = this.getTacosByDescription(value);
                break;
            default:
            Tacos = this.tipoDeTacos;
        }

        return Tacos;
    }

    public deleteTaco(taco: TipoTaco): Observable<Array<TipoTaco>> {
        return new Observable((observer) => {
            this.http
            .delete(this.apiUrl + 'tacos/' + taco.id, {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<TipoTaco>) => {
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }

    public updateTaco(id: number, name: string, description: string): Observable<Array<TipoTaco>> {
        return new Observable((observer) => {
            this.http
            .put(this.apiUrl + 'tacos/' + id, new TipoTaco(id, name, description), {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<TipoTaco>) => {
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }

    public addTaco(name: string, description: string): Observable<Array<TipoTaco>> {
        return new Observable((observer) => {
            this.http
            .post(this.apiUrl + 'tacos/', new TipoTaco(0, name, description), {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<TipoTaco>) => {
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }
}
