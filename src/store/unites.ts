import { Unite } from "@/interfaces/Unite";
import client from "@/utils/apolloClient";
import { gql } from "@apollo/client/core";
import {
  useQuery,
  useResult,
  provideApolloClient,
} from "@vue/apollo-composable";
import { Collection, Edge } from "@/interfaces/GraphQL";

provideApolloClient(client);

const GET_UNITS = gql`
  query GetUnits {
    units {
      edges {
        node {
          id
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
`;

interface Result {
  units: Collection<Unite>;
}

const { result } = useQuery<Result>(GET_UNITS);

export const units = useResult(result);

export const getUnitesSortedByName = (): Edge<Unite>[] => {
  if (units.value === undefined) {
    return [];
  }
  return units.value.edges
    .slice()
    .sort((a, b) => a.node.name.localeCompare(b.node.name));
};
