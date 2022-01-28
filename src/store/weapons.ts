import client from "@/utils/apolloClient";
import { gql } from "@apollo/client/core";
import {
  useQuery,
  useResult,
  provideApolloClient,
} from "@vue/apollo-composable";
import { Collection } from "@/interfaces/GraphQL";
import { Weapon } from "@/interfaces/Personnage";

provideApolloClient(client);

const GET_WEAPONS = gql`
  query getWeapons {
    weapons {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

interface Result {
  weapons: Collection<Weapon>;
}

const { result } = useQuery<Result>(GET_WEAPONS);

export const weapons = useResult(result);
