import {Paper, Typography, styled} from "@mui/material"
import React from "react"
import BoardCard from "./BoardCard"
import {Task} from "models/Task"

const Root = styled(Paper)(({theme}) => ({
  width: "380px",
  display: "flex",
  maxHeight: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  marginLeft: "8px",
  marginRight: "8px",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "300px"
  },
  padding: theme.spacing(2)
}))

interface BoardListProps {
  label: string
  cards: Task[]
}
export const BoardList: React.FC<BoardListProps> = (props: BoardListProps) => {
  const {cards, label} = props
  return (
    <Root>
      <Typography>{label}</Typography>
      {/* Cards */}
      {cards.map((card, cardIndex) => (
        <BoardCard key={`list${label}-card-${cardIndex}`} card={card} />
      ))}
    </Root>
  )
}

export default BoardList
