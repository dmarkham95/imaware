import React from "react"
import "./App.css"
import {Provider} from "react-redux"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {store} from "@app-core/store"
import CounterView from "views/counter"
import HomeView from "views/home"
import KanbanBoardView from "views/kanban-board"
import Layout from "views/layouts/Layout"
import NotFound from "views/notFound"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route index element={<HomeView />} />
            <Route path="home" element={<HomeView />} />
            <Route path="counter" element={<CounterView />} />
            <Route path="kanban-board" element={<KanbanBoardView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
