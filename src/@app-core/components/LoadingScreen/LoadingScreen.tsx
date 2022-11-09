import {Box, Backdrop, CircularProgress} from "@mui/material"
import {styled} from "@mui/material/styles"
import React from "react"

export interface ILoadingScreen {
  isLoading?: boolean
}

const StyledBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: theme.spacing(10),
  height: "100%"
}))

const StyledBackdrop = styled(Backdrop)(({theme}) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#ffffff"
}))

export const LoadingScreen: React.FC<ILoadingScreen> = (
  props: ILoadingScreen
) => {
  const {isLoading = true} = props
  return (
    <StyledBox>
      <StyledBackdrop open={isLoading}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
    </StyledBox>
  )
}

export default LoadingScreen
