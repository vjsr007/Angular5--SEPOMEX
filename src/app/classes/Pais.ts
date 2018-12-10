export class Pais {
    PaisID:  number;
    Nombre: string;
    Codigo: string;
    Moneda: string;
    CodMoneda: string;
    FechaUltimaModificacion: Date;
    UsuarioID: number;
    Activo: boolean;

    constructor(
        PaisID:  number,
        Nombre: string,
        Codigo: string,
        Moneda: string,
        CodMoneda: string,
        Activo: boolean
    ) {
        this.PaisID = PaisID;
        this.Nombre = Nombre;
        this.Codigo = Codigo;
        this.Moneda = Moneda;
        this.CodMoneda = CodMoneda;
        this.Activo = Activo;
    }
}
