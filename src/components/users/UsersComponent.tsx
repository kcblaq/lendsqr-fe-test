import React from 'react'
import MainLayout from '../layout/MainLayout'
import "./styles.scss"
import UserCard from '../card/UserCard'
import users from "../../../src/asset/cardusers.png"
import activeusers from "../../../src/asset/activeusers.png"
import userswithloan from "../../../src/asset/userswithloan.png"
import userswithsavings from "../../../src/asset/userswithsavings.png"
import { CgSortAz} from "react-icons/cg"
import UsersTable from './UsersTable'
import Paginate from '../../hooks/paginate/Paginate'



function UsersComponent() {
  return (
   <MainLayout>
    <div className="usermain">
      <h1> Users</h1>
      <div className="cards">
        <UserCard icon={users} title="USERS" amount="2,453"/>
        <UserCard icon={activeusers} title="ACTIVE USERS" amount="2,453"/>
        <UserCard icon={userswithloan} title="USERS WITH LOANS" amount="12,453"/>
        <UserCard icon={userswithsavings} title="USERS WITH SAVINGS" amount="12,453"/>
      </div>
    </div>
    <UsersTable/>

   </MainLayout>
  )
}

export default UsersComponent