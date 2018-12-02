export interface User {
    nick: string;
    subnick?: string; //Si utilizamos un ? significa que el atributo para a ser opcional, es decir, puede tener o no tener valor.
    age?: number;
    email: string;
    friend: boolean;
    uid: any;
}