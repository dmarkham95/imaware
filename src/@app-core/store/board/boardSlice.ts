import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit"
import {RootState} from ".."
import {fetchTaskData} from "./boardAPI"
import {Task} from "models/Task"

export interface BoardState {
  boardData: Task[]
  status: "idle" | "loading" | "failed"
  searchText: string
}

const initialState: BoardState = {
  boardData: [],
  status: "idle",
  searchText: ""
}

export const getBoard = createAsyncThunk("board/fetchTaskData", async () => {
  const response = await fetchTaskData()
  // The value we return becomes the `fulfilled` action payload
  return response.data
})

export const boardSlice = createSlice({
  name: "board",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTasksSearchText: {
      reducer: (state, action: PayloadAction<string>) => {
        state.searchText = action.payload
      },
      // React.ChangeEvent<HTMLInputElement>
      prepare: (value: string) => ({
        payload: value
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoard.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.status = "idle"
        state.boardData = action.payload
      })
      .addCase(getBoard.rejected, (state) => {
        state.status = "failed"
      })
  }
})

export const selectBoardData = (state: RootState) => state.board.boardData
export const selectSearchText = (state: RootState) => state.board.searchText
export const {setTasksSearchText} = boardSlice.actions

export const selectFilteredBoardData = createSelector(
  [selectBoardData, selectSearchText],
  (tasks, searchText) => {
    if (searchText.length === 0) {
      return tasks
    }
    const text = searchText.toLowerCase()

    const filteredData = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(text) ||
        task.subtype.toLowerCase().includes(text) ||
        (task.description && task.description.toLowerCase().includes(text)) ||
        (task.type && task.type.toLowerCase().includes(text))
    )

    return filteredData
  }
)
export default boardSlice.reducer
