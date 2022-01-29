import { EventPersonnage } from "./Personnage";

export interface Event {
  id: string;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  eventUsers?: EventPersonnage[];
}
