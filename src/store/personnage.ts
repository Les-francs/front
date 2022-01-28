import { state as eventState } from "../components/Evenements/events";
import { User } from "@/interfaces/Personnage";
import { Event } from "@/interfaces/Event";
import { Unite } from "@/interfaces/Unite";
import client from "@/utils/apolloClient";
import { gql } from "@apollo/client/core";
import { state } from "@/store/app";
import {
  useQuery,
  useMutation,
  useResult,
  provideApolloClient,
} from "@vue/apollo-composable";
import { reactive, watch } from "vue";

provideApolloClient(client);

const GET_PERSO = gql`
  query GetUnits($id: ID!) {
    user(id: $id) {
      id
      username
      influence
      weapon {
        id
        name
      }
      house {
        name
      }
      unitUsers {
        edges {
          node {
            unit {
              name
              influence
              typeUnit {
                name
              }
              era {
                name
              }
              pict
            }
          }
        }
      }
      eventUsers {
        edges {
          node {
            participation
            event {
              name
              description
              startAt
              endAt
            }
          }
        }
      }
    }
  }
`;

interface Result {
  user: User;
}

const { result } = useQuery<Result>(GET_PERSO, {
  id: "/api/users/" + state.value.username,
});

export const perso = useResult(result);

export const updatedData = reactive({
  house: perso.value?.house?.id,
  influence: perso.value?.influence,
  username: perso.value?.username,
  weapon: perso.value?.weapon.id,
});

watch(perso, () => {
  updatedData.house = perso.value?.house?.id;
  updatedData.influence = perso.value?.influence;
  updatedData.username = perso.value?.username;
  updatedData.weapon = perso.value?.weapon.id;
});

const UPDATE_PERSO = gql`
  mutation updateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        username
        weapon {
          name
          id
        }
        influence
        house {
          id
          name
        }
      }
    }
  }
`;

const { mutate } = useMutation(UPDATE_PERSO);

export const updatePerso = (): void => {
  if (!perso.value) {
    return;
  }

  const variables = {
    input: {
      id: perso.value.id,
      house: updatedData.house,
      influence: updatedData.influence,
      username: updatedData.username,
      weapon: updatedData.weapon,
    },
  };

  console.log("Update user");

  mutate(variables);
};

export const addUnite = (unite?: Unite): void => {
  if (!unite || !perso.value) {
    return;
  }

  const ADD_UNIT = gql`
    mutation addUnit($input: createUnitUserInput!) {
      createUnitUser(input: $input) {
        unitUser {
          id
        }
      }
    }
  `;

  const variables = {
    input: {
      user: perso.value.id,
      unit: unite.id,
      level: 1,
      control: "/api/controls/57",
    },
  };

  useMutation(ADD_UNIT, { variables });
};

export const addEvent = (event?: Event): void => {
  if (!event || !perso.value) {
    return;
  }

  const ADD_EVENT = gql`
    mutation addEvent($input: createEventUserInput!) {
      createEventUser(input: $input) {
        eventUser {
          id
        }
      }
    }
  `;

  const variables = {
    input: {
      user: perso.value.id,
      event: event.id,
    },
  };

  useMutation(ADD_EVENT, { variables });
};

export const getAvailableEvents = (): Event[] => {
  if (!perso.value) {
    return [];
  }

  return eventState.value.filter((val) => {
    const ids = perso.value?.eventUsers.edges.map((ev) => ev.node.event?.id);

    return ids ? ids.indexOf(val.id) === -1 : true;
  });
};
