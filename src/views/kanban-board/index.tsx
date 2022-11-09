import DeleteIcon from "@mui/icons-material/Delete"
import {Box, styled, TextField, Button} from "@mui/material"
import React, {useEffect} from "react"
import {
  getBoard,
  selectSearchText,
  selectFilteredBoardData,
  setTasksSearchText
} from "@app-core/store/board/boardSlice"

import {useAppSelector, useAppDispatch} from "@app-core/store/hooks"
import {BoardList} from "components/KanbanBoard"

const Root = styled(Box)(({theme}) => ({
  overflowY: "auto",
  height: "100%",
  padding: theme.spacing(2)
}))

const BoardContainer = styled(Box)(({theme}) => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "row",
  overflowX: "auto",
  height: "100%"
}))

const BoardContent = styled(Box)(({theme}) => ({
  display: "flex",
  flex: "1 1 auto",
  overflowX: "auto",
  overflowY: "hidden",
  height: "100%",
  padding: theme.spacing(2)
}))

const boardLists = [
  {
    name: "TODO",
    displayLabel: "To Do"
  },
  {
    name: "DOING",
    displayLabel: "Doing"
  },
  {
    name: "DONE",
    displayLabel: "Done"
  }
]

export const KanbanBoardView: React.FC = () => {
  const searchText = useAppSelector(selectSearchText)
  const filteredData = useAppSelector(selectFilteredBoardData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getBoard())
  }, [dispatch])

  const getListCardData = (list: string) => {
    const cards = filteredData.filter((d) => d.status === list)
    return cards
  }

  const clearText = () => {
    dispatch(setTasksSearchText(""))
  }
  return (
    <Root>
      <Box
        sx={{
          padding: "24px",
          width: "100%",
          borderBottomWidth: "1px",
          borderColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{display: "flex", justifyContent: "center"}}>
          <TextField
            id="outlined-basic-search"
            label="Search"
            variant="outlined"
            onChange={(ev) =>
              dispatch(setTasksSearchText(ev.target.value || ""))
            }
            value={searchText}
            sx={{width: "385px"}}
          />
          <Button
            disabled={searchText === ""}
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={clearText}
            sx={{marginLeft: "10px"}}
          >
            Clear
          </Button>
        </div>
      </Box>

      <BoardContainer>
        <BoardContent>
          {/* Lists */}
          {boardLists.map((list, index) => (
            <BoardList
              key={`list-${index}`}
              cards={getListCardData(list.name)}
              label={list.displayLabel}
            />
          ))}
        </BoardContent>
      </BoardContainer>
    </Root>
  )
}

export default KanbanBoardView
