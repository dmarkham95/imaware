import {Slide, Dialog, Box, Typography, Button, styled} from "@mui/material"
import {TransitionProps} from "@mui/material/transitions"
import React from "react"
import errorGraphic from "assets/images/error.svg"

export interface IErrorModal {
  error: string
  title?: string
}

const StyledBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: theme.spacing(10),
  height: "100%"
}))

const StyledImg = styled("img")(({theme}) => ({
  maxHeight: 350,
  [theme.breakpoints.down("sm")]: {
    maxHeight: 250
  }
}))

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const ErrorModal: React.FC<IErrorModal> = (props: IErrorModal) => {
  const {error, title = "Uh Oh!"} = props

  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <Dialog fullScreen open={true} TransitionComponent={Transition}>
      <StyledBox>
        <StyledImg src={errorGraphic} alt="Error Graphic" />
        <Typography variant="subtitle1" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {error}
        </Typography>
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={handleRetry}
          style={{width: "300"}}
        >
          Retry
        </Button>
      </StyledBox>
    </Dialog>
  )
}

export default ErrorModal
