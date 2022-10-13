import React from 'react'
import MainLayout from '../layout/MainLayout'
import "./styles.scss"
import UserCard from '../card/UserCard'
import users from "../../../src/asset/cardusers.png"
import { CgSortAz} from "react-icons/cg"
import UsersTable from './UsersTable'



function UsersComponent() {
  return (
   <MainLayout>
    <div className="usermain">
      <h1> Users</h1>
      <div className="cards">
        <UserCard icon={users} title="USERS" amount="2,409"/>
        <UserCard icon={users} title="USERS" amount="2,409"/>
        <UserCard icon={users} title="USERS" amount="2,409"/>
        <UserCard icon={users} title="USERS" amount="2,409"/>
      </div>
    </div>
    <UsersTable/>
   </MainLayout>
  )
}

export default UsersComponent