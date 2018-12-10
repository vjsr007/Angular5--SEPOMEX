import { Injectable } from '@angular/core';
import { Pais } from '../classes/Pais';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PaisService {
    private paises: Array<Pais>;
    private apiUrl = 'http://localhost:20923/api/';

    constructor(private http: HttpClient) {
    }

    public getPaises(): Observable<(Array<Pais>)> {
        return new Observable((observer) => {
            this.http
            .get(this.apiUrl + 'pais/', {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<Pais>) => {
                    this.paises = response;
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }

    public getKeys(): Promise<(Array<string>)> {
        return new Promise((resolve, reject) => {
            this.http
            .get(this.apiUrl + 'pais/', {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<Pais>) => {
                    resolve(response.length > 0 ? Object.keys(response[0]) : []);
                },
                error => reject(error)
            );
        });
    }

    public getPaisesByCode(code: string): Array<Pais> {
        return this
                .paises
                .filter(t =>
                    t.Nombre.toLowerCase().indexOf(code.toLowerCase()) >= 0 || code === ''
                );
    }

    public getPaisesByName(name: string): Array<Pais> {
        return this
            .paises
            .filter(t =>
                t.Nombre.toLowerCase().indexOf(name.toLowerCase()) >= 0 || name === ''
            );
    }

    public getPaisesByFilter(filter: string, value: string): Array<Pais> {
        let Paiss: Array<Pais>;
        switch (filter) {
            case 'name':
                Paiss = this.getPaisesByName(value);
                break;
            case 'description':
                Paiss = this.getPaisesByCode(value);
                break;
            default:
            Paiss = this.paises;
        }

        return Paiss;
    }

    public deletePais(pais: Pais): Observable<Array<Pais>> {
        return new Observable((observer) => {
            this.http
            .delete(this.apiUrl + 'pais/' + pais.PaisID, {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<Pais>) => {
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }

    public updatePais(pais: Pais): Observable<Array<Pais>> {
        return new Observable((observer) => {
            this.http
            .put(this.apiUrl + 'pais/' + pais.PaisID, pais, {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<Pais>) => {
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }

    public addPais(pais: Pais): Observable<Array<Pais>> {
        return new Observable((observer) => {
            this.http
            .post(this.apiUrl + 'pais/', pais, {responseType: 'json', withCredentials: true})
            .subscribe(
                (response: Array<Pais>) => {
                    observer.next(response);
                },
                error => observer.error(error)
            );
        });
    }
}
