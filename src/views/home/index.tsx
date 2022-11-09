import {Button, Stack, Typography} from "@mui/material"
import React from "react"
import {useNavigate} from "react-router-dom"

export const HomeView: React.FC = () => {
  const navigate = useNavigate()

  const onModuleClick = (module: string) => {
    navigate(`/${module}`)
  }
  return (
    <div>
      <Typography variant="h6">Click buttons below to view module</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => onModuleClick("counter")}
          variant="contained"
          size="large"
        >
          Counter
        </Button>

        <Button
          onClick={() => onModuleClick("kanban-board")}
          variant="contained"
          size="large"
        >
          Kanban Board
        </Button>
      </Stack>
    </div>
  )
}

export default HomeView
