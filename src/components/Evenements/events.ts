import { Ref, ref } from "vue";

export interface Event {
  id: number;
  name: string;
  description: string;
  dateDebut: string;
  dateFin: string;
}

export const state: Ref<Event[]> = ref([
  {
    id: 1,
    dateDebut: "2022-01-15 1h10",
    dateFin: "2022-01-16 1h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 2,
    dateDebut: "2022-01-15 2h10",
    dateFin: "2022-01-16 2h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 3,
    dateDebut: "2022-01-15 3h10",
    dateFin: "2022-01-16 3h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 4,
    dateDebut: "2022-01-15 4h10",
    dateFin: "2022-01-16 4h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 5,
    dateDebut: "2022-01-15 5h10",
    dateFin: "2022-01-16 5h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 6,
    dateDebut: "2022-01-15 6h10",
    dateFin: "2022-01-16 6h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 7,
    dateDebut: "2022-01-15 7h10",
    dateFin: "2022-01-16 7h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 8,
    dateDebut: "2022-01-15 8h10",
    dateFin: "2022-01-16 8h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 9,
    dateDebut: "2022-01-15 9h10",
    dateFin: "2022-01-16 9h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 10,
    dateDebut: "2022-01-15 10h10",
    dateFin: "2022-01-16 10h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 11,
    dateDebut: "2022-01-15 11h10",
    dateFin: "2022-01-16 11h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 12,
    dateDebut: "2022-01-15 12h10",
    dateFin: "2022-01-16 12h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 13,
    dateDebut: "2022-01-15 13h10",
    dateFin: "2022-01-16 13h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 14,
    dateDebut: "2022-01-15 14h10",
    dateFin: "2022-01-16 14h30",
    name: "GVG",
    description: "Guerre de maison",
  },
  {
    id: 15,
    dateDebut: "2022-01-15 15h10",
    dateFin: "2022-01-16 15h30",
    name: "GVG",
    description: "Guerre de maison",
  },
]);

export const eventSelected: Ref<number | undefined> = ref();

export const addEvent = (): void => {
  const id = (state.value[state.value.length - 1].id ?? 0) + 1;

  state.value.push({
    id,
    dateDebut: new Date().toDateString(),
    dateFin: new Date().toDateString(),
    name: "",
    description: "",
  });
};

export const deleteEvent = (id: number): void => {
  state.value = state.value.filter((val) => val.id !== id);
};
