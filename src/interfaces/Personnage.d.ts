import { Event } from "./Event";

export interface EventPersonnage {
  event?: Event;
  personnage?: Personnage;
  participation: string;
}

export interface PersonnageUnite {
  level: number;
  maitrise: "bl" | "elite" | "max" | "auxiliaire";
  drawer: boolean;
  unite?: Unite;
  personnage?: Personnage;
}

export interface Personnage {
  pseudo: string;
  influence: number;
  maison: string;
  classe: string;
  unites: PersonnageUnite[];
  events: EventPersonnage[];
  editMode?: boolean;
}
