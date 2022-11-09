import HomeIcon from "@mui/icons-material/Home"
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material"
import React from "react"
import {useNavigate} from "react-router-dom"
import {Footer} from "components/Footer"

interface IMainLayout {
  children: React.ReactNode
}
export const Layout: React.FC<IMainLayout> = (props: IMainLayout) => {
  const {children} = props
  const navigate = useNavigate()

  const onHomeClick = () => {
    navigate("/")
  }
  return (
    <div style={{backgroundColor: "#F0F0F0", display: "flex"}}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            imaware
          </Typography>
          <IconButton onClick={onHomeClick} aria-label="home">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flex: "1 1 auto",
          padding: "64px 15px 15px",
          width: "100%",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        {children}
      </Box>
    </div>
  )
}

export default Layout
