import { Event } from "@/interfaces/Event";
import { Ref, ref, watch } from "vue";
import client from "@/utils/apolloClient";
import { gql } from "@apollo/client/core";
import {
  useQuery,
  useResult,
  provideApolloClient,
} from "@vue/apollo-composable";
import { Collection } from "@/interfaces/GraphQL";
import { addEvent as addEventUser } from "@/store/personnage";

provideApolloClient(client);

const GET_EVENTS = gql`
  query getEvents($starting: String) {
    events(startAt: { after: $starting }) {
      edges {
        node {
          id
          name
          description
          startAt
          endAt
        }
      }
    }
  }
`;

interface Result {
  events: Collection<Event>;
}

const { result } = useQuery<Result>(GET_EVENTS, {
  starting: new Date().toDateString(),
});

export const events = useResult(result);

export const eventSelected: Ref<string | undefined> = ref();

watch(eventSelected, (newEventSelected) => {
  if (!newEventSelected) {
    return;
  }
  const event = events.value?.edges.find(
    (val) => val.node.id === newEventSelected
  );
  addEventUser(event);
});

export const drawerOpenned: Ref<boolean> = ref(false);

export const addEvent = (): void => {
  return;
};

export const deleteEvent = (id: string): void => {
  return;
};
