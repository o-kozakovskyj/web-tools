import { createListItem } from'./render' 

it ('shoud return stored logs', () => {
  const logger = createLogger('user login')
  expect(logger.getLogs()).toEqual([])
});