import {faker} from "@faker-js/faker"
import {Task} from "models/Task"

const createRandomTask = (): Task => {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.words(3),
    type: faker.helpers.arrayElement(["capacity", "ribbon", "variance"]),
    subtype: faker.lorem.word({length: {min: 3, max: 10}}),
    description: faker.lorem.words(5),
    status: faker.helpers.arrayElement(["TODO", "DOING", "DONE"]),
    note: faker.lorem.lines(2)
  }
}

export const generateTask = (amount = 10) => {
  const tasks: Task[] = []

  Array.from({length: 10}).forEach(() => {
    tasks.push(createRandomTask())
  })

  return tasks
}
