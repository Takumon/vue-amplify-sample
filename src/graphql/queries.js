// eslint-disable
// this is an auto generated file. This will be overwritten

export const singleTask = `query SingleTask($id: ID!) {
  singleTask(id: $id) {
    id
    title
    completed
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    completed
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: TableTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      completed
    }
    nextToken
  }
}
`;
