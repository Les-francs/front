export interface Edge<T> {
  node: T;
}

export interface Collection<T> {
  pageInfo?: {
    endCursor?: string;
    startCursor?: string;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  };
  totalCount?: number;
  edges: Edge<T>[];
}
