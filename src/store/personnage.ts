import { Ref, ref } from "vue";
import { Unite } from "./unites";

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
  editMode: boolean;
}

export const state: Ref<Personnage> = ref({
  pseudo: "Vilsafur",
  influence: 700,
  maison: "Les francs",
  classe: "longbow",
  unites: [],
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
