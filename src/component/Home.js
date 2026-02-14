import React from 'react'
import Navbar from './navbar/Navbar'
import First from './First'
import Footer from './Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function Home() {
  return (
    <div>
      <Navbar />
    import { DatabricksDashboard } from "@databricks/aibi-client";
  
const dashboard = new DatabricksDashboard({
  instanceUrl: "https://dbc-3a0d0c45-bb5d.cloud.databricks.com",
  workspaceId: "88284658625834",
  dashboardId: "01f10994ad6e1a3d97c76980d86186f5",
  token: "<<CREATED_BY_YOUR_SERVER>>", // This token should be minted by your server
  container: document.getElementById("dashboard-container"),
});

dashboard.initialize();
      <First />
      <Footer />     
    </div>
  )
}

export default Home
