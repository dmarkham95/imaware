import {generateTask} from "data/mocks/tasks"
import {Task} from "models/Task"

// A mock function to mimic making an async request for data
export function fetchTaskData() {
  return new Promise<{data: Task[]}>((resolve) =>
    setTimeout(() => resolve({data: generateTask(20)}), 500)
  )
}
