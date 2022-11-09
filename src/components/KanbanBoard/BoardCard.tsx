import {Typography, Card, CardContent} from "@mui/material"
import React from "react"
import {Task} from "models/Task"

interface BoardCardProps {
  card: Task
}
export const BoardCard: React.FC<BoardCardProps> = (props: BoardCardProps) => {
  const {card} = props

  const formatEventType = (eventType: string) => {
    switch (eventType) {
      case "capacity":
        return "Capacity Change Event"
      case "ribbon":
        return "Ribbon Event"
      case "variance":
        return "Variance Event"
      default:
        return ""
    }
  }

  return (
    <div>
      <Card variant="outlined" sx={{minWidth: 275, marginBottom: "10px"}}>
        <CardContent>
          <Typography variant="h6" component="div">
            {card.title}
          </Typography>
          <Typography variant="h6" component="div">
            {card.subtype}
          </Typography>
          <Typography color="text.secondary">{card.description}</Typography>
          <Typography color="text.secondary">
            {formatEventType(card.type)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default BoardCard
