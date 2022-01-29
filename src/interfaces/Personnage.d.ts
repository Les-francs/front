import { Event } from "./Event";
import { Collection } from "./GraphQL";

export interface EventUser {
  id: string;
  event?: Event;
  user?: User;
  participation: string;
}

export interface UniteUser {
  id: string;
  level: number;
  maitrise: "bas level" | "élite" | "max" | "auxiliaire";
  drawer: boolean;
  unite?: Unite;
  personnage?: Personnage;
}

interface Weapon {
  name: string;
  id: string;
}

interface House {
  name: string;
  id: string;
}

export interface User {
  id: string;
  username: string;
  influence: number;
  weapon: Weapon;
  house?: House;
  unitUsers: Collection<UniteUser>;
  eventUsers: Collection<EventUser>;
}
