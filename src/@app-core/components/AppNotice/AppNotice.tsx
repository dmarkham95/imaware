import {Typography} from "@mui/material"
import Box from "@mui/material/Box"
import {styled} from "@mui/material/styles"
import React from "react"

export interface IAppNotice {
  notice?: string
}

const StyledBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: theme.spacing(10),
  height: "100%"
}))

export const AppNotice: React.FC<IAppNotice> = (props: IAppNotice) => {
  const {notice = "Coming Soon"} = props
  return (
    <StyledBox>
      <Typography variant="body2" color="textSecondary" component="p">
        {notice}
      </Typography>
    </StyledBox>
  )
}

export default AppNotice
