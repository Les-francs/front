import { EventPersonnage } from "./Personnage";

export interface Event {
  id: number;
  name: string;
  description: string;
  dateDebut: string;
  dateFin: string;
  personnages?: EventPersonnage[];
}
