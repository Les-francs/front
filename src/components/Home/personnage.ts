import { Ref, ref } from "vue";
import { state as eventState } from "../Evenements/events";
import { Personnage } from "@/interfaces/Personnage";
import { Event } from "@/interfaces/Event";
import { Unite } from "@/interfaces/Unite";

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
