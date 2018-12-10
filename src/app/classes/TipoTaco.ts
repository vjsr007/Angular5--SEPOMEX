export class TipoTaco {
    public id:  number;
    public name: string;
    public description: string;
    public add = 'add';
    public edit = 'edit';

    constructor(
        id:  number,
        name: string,
        description: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
