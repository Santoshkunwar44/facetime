import React from 'react'
import { DashboardWrapper } from './Dashboard.styles'
import Navbar from '../../Layouts/Navbar/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import MainContent from '../../components/Dashboard/MainContent/MainContent'
import FriendsList from '../../components/Dashboard/FriendsList/FriendsList'

const Dashboard = () => {
  return (
    <DashboardWrapper>
        <Navbar/>
        <div className="dashboardContainer">
            <Sidebar/>
            <MainContent/>
            <FriendsList/>


        </div>

    </DashboardWrapper>
  )
}

export default Dashboard