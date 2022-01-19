import { Ref, ref } from "vue";
import { Unite } from "./unites";

interface UnitePersonnage extends Unite {
  level: number;
  maitrise: "bl" | "elite" | "max" | "auxiliaire";
  drawer: boolean;
}

export interface Personnage {
  pseudo: string;
  influence: number;
  maison: string;
  classe: string;
  unites: UnitePersonnage[];
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
      ...unite,
      level: 1,
      maitrise: "bl",
      drawer: false,
    });
  }
};
