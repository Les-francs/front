import { Event } from "./Event";

interface EventPersonnage {
  event: Event;
  participation: string;
}

interface PersonnageUnite {
  level: number;
  maitrise: "bl" | "elite" | "max" | "auxiliaire";
  drawer: boolean;
  unite: Unite;
}

export interface Personnage {
  pseudo: string;
  influence: number;
  maison: string;
  classe: string;
  unites: PersonnageUnite[];
  events: EventPersonnage[];
  editMode: boolean;
}
