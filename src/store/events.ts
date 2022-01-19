import { Ref, ref } from "vue";

interface Event {
  name: string;
  description: string;
  participation: string;
  dateDebut: string;
  dateFin: string;
}

export const state: Ref<Event[]> = ref([
  {
    dateDebut: "2022-01-15 19h30",
    dateFin: "2022-01-16 21h00",
    name: "GVG",
    description: "Guerre de maison",
    participation: "ne-sais-pas",
  },
  {
    dateDebut: "2022-01-15 19h30",
    dateFin: "2022-01-16 21h00",
    name: "GVG",
    description: "Guerre de maison",
    participation: "ne-sais-pas",
  },
  {
    dateDebut: "2022-01-15 19h30",
    dateFin: "2022-01-16 21h00",
    name: "GVG",
    description: "Guerre de maison",
    participation: "ne-sais-pas",
  },
  {
    dateDebut: "2022-01-15 19h30",
    dateFin: "2022-01-16 21h00",
    name: "GVG",
    description: "Guerre de maison",
    participation: "ne-sais-pas",
  },
  {
    dateDebut: "2022-01-15 19h30",
    dateFin: "2022-01-16 21h00",
    name: "GVG",
    description: "Guerre de maison",
    participation: "ne-sais-pas",
  },
]);
