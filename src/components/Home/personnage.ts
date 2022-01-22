import { Ref, ref } from "vue";
import { Event, state as eventState } from "../Evenements/events";
import { Unite } from "../Caserne/unites";

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

export const state: Ref<Personnage> = ref({
  pseudo: "Vilsafur",
  influence: 700,
  maison: "Les francs",
  classe: "longbow",
  unites: [],
  events: [],
  editMode: false,
});

export const addUnite = (unite?: Unite): void => {
  if (unite) {
    state.value.unites.push({
      unite,
      level: 1,
      maitrise: "bl",
      drawer: false,
    });
  }
};

export const addEvent = (event?: Event): void => {
  if (event) {
    state.value.events.push({
      event,
      participation: "ne-sais-pas",
    });
  }
};

export const getAvailableEvents = (): Event[] =>
  eventState.value.filter((val) => {
    const ids = state.value.events.map((ev) => ev.event.id);

    return ids.indexOf(val.id) === -1;
  });
