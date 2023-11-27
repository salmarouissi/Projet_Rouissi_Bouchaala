import { Formateur } from "../formateur/formateur";
import { Personne } from "../personne/personne";


export class Formation {
    constructor(  
        public id :number,
        public nom :string,
        public photo:string,
        public prix:number,
        public dateF:string,
        public heure:string,
        public duree:number,
        public lieux:string,
        public disponible:boolean,
        public nbrParticipant:number,
        public description:string,
        public format:string,
        public personneInscri?:Personne[]
    ){}
}
    

