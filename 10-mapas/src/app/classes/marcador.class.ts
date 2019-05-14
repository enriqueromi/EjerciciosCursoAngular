

// export class Marcador{
//     constructor(public las:number, public lng:number){ }

// }

export class Marcador {
    public lat: number;
    public lng: number;

    public titulo = 'Sin titulo';
    public desc = 'Sin Descripción';

    constructor( lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
