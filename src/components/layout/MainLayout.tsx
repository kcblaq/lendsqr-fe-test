import React from 'react'
import "./layout.scss"
import NavPage from '../../pages/NavPage'
import { FaSuitcase } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { RiHome4Line } from "react-icons/ri"
import users from '../../asset/users.png'
import loans from '../../asset/loans.png'
import dmodel from '../../asset/handshake.png'
import savings from '../../asset/loanrequest.png'
import loanrequest from '../../asset/trippleusers.png'
import whitelist from '../../asset/whitelist.png'
import org from '../../asset/organization.png'
import lp from '../../asset/loanproducts.png'
import sp from '../../asset/savingsproduct.png'
import fc from '../../asset/feesandcharges.png'
import transactions from '../../asset/transactions.png'
import services from '../../asset/services.png'
import serviceaccount from '../../asset/serviceaccount.png'
import settlements from '../../asset/settlements.png'
import reports from '../../asset/reports.png'
import karma from '../../asset/karma.png'
import preferences from '../../asset/preferences.png'
import fees from '../../asset/feesandprices.png'
import audit from '../../asset/auditlogs.png'







const isActiveStyle = {
    textDecoration: 'none',
    color: 'red',
    backgroundColor: '#F3FCFC',
    borderLeft: '10px solid #39CDCC'
};

interface customers {
    title: string,
    to: string,
    icon: HTMLImageElement
}

const customers = [
    { title: 'Users', to: '/users', icon: users },
    { title: 'Personal', to: '/personal', icon: users },
    { title: 'Loans', to: 'guarantor', icon: loans },
    { title: 'Decision Model', to: 'guarantor', icon: dmodel },
    { title: 'Loan Request', to: '/quarantor', icon: loanrequest },
    { title: 'Whitelist', to: '/quarantor', icon: whitelist },
    { title: 'Karma', to: '/quarantor', icon: karma }
]

const businesses = [
    { title: 'Organizations ', to: '/users', icon: org },
    { title: 'Loan Products', to: '/personal', icon: lp },
    { title: 'Savings Products', to: 'guarantor', icon: sp },
    { title: 'Fees and Charges', to: 'guarantor', icon: fc },
    { title: 'Transactions', to: '/quarantor', icon: transactions },
    { title: 'Services', to: '/quarantor', icon: services },
    { title: 'Service Account', to: '/quarantor', icon: serviceaccount },
    { title: 'Settlements', to: '/quarantor', icon: settlements },
    { title: 'Reports', to: '/quarantor', icon: reports },
]

const settings = [
    { title: 'Preferences ', to: '/preferences', icon: preferences },
    { title: 'Fees and Pricing', to: '/fees', icon: fees },
    { title: 'Audit Logs', to: '/audit', icon: audit }
]

function MainLayout({ children }: any) {
    return (
        <>
        <NavPage />
        
        <div className='mainlayout'>
            <section className='mainleft'>
                <details >
                    <summary> Switch Organization</summary>
                    <div >
                        <Link to='/a'> <h5>  Organization A</h5></Link>
                    </div>
                    <div >
                        <Link to='/a'> <h5>  Organization B</h5></Link>
                    </div>
                    <div >
                        <Link to='/a'> <h5>  Organization C</h5></Link>
                    </div>
                </details>
                <NavLink to="/"
                    className='singleitem'
                >
                    <div className="item">
                        <RiHome4Line  />
                        <h5> Dashboard</h5>

                    </div>

                </NavLink>

                <h4 className='title'>Customers </h4>
                {businesses.map((customer, i) => {
                    return (
                        <NavLink to={customer.to} key={i} className='singleitem'
                            style={({ isActive }) => isActive ? isActiveStyle : {}}
                        >
                            <div className="item">
                                <img src={customer.icon} alt=""  />
                                <h5>{customer.title} </h5>
                            </div>
                        </NavLink>
                    )
                })}

                <h4 className='title'>Businesses </h4>
                {customers.map((business, i) => {
                    return (
                        <NavLink to={business.to} key={i} className='singleitem'
                            style={({ isActive }) => isActive ? isActiveStyle : {}}
                        >
                            <div className="item">
                                <img src={business.icon} alt="" />
                                <h5>{business.title} </h5>
                            </div>
                        </NavLink>
                    )
                })}

                <h4 className='title'>Settings </h4>
                {settings.map((setting, i) => {
                    return (
                        <NavLink to={setting.to} key={i} className='singleitem'
                            style={({ isActive }) => isActive ? isActiveStyle : {}}
                        >
                            <div className="item">
                                <img src={setting.icon} alt="" />
                                <h5>{setting.title} </h5>
                            </div>
                        </NavLink>
                    )
                })}

            </section>
            <section className='mainright'>
               
                {children}
            </section>

        </div>
        </>
    )
}

export default MainLayout





// className={({ isActive }) =>
//     isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
//   }