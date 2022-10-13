import { log } from 'console';
import React, { useEffect, useState } from 'react'
import { CgSortAz } from "react-icons/cg"
import "./styles.scss";

function UsersTable() {
    const [data, setData] = useState([])

    const DateFormatter = (date: string) => {
        const correctdate = new Date(date).toLocaleDateString('en-US');
        return correctdate
    }

    // DateFormatter()

    useEffect(() => {
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then((res) => res.json())
            .then((response) => setData(response))





    }, [data])

    localStorage.setItem("detail", JSON.stringify(data))
    const mdata = JSON.parse(localStorage.getItem('detail') || '[]')

console.log(data)

    return (
        <div className='tablemain' >
            <table >
                <thead>
                    <tr>
                        <th> Organization <CgSortAz /> </th>
                        <th> Username <CgSortAz /> </th>
                        <th> Email <CgSortAz /> </th>
                        <th> Phone Number <CgSortAz /> </th>
                        <th> Date Joined <CgSortAz /> </th>
                        <th> Status <CgSortAz /> </th>
                        <th> </th>
                    </tr>
                </thead>
                {data.map((info: {
                    orgName: string, userName: string,
                    email: string, phoneNumber: string,
                    education: { employmentStatus: string }, createdAt: string
                }, i) => (
                    <tbody key={i}>
                        <tr className='oromi' style={{}}>
                            <td> {info.orgName}</td>
                            <td>{info.userName} </td>

                            <td>{info.email} </td>

                            <td>{info.phoneNumber} </td>

                            {/* <td>{info.createdAt} </td> */}
                            <td>{DateFormatter(info.createdAt)} </td>

                            <td>{info.education.employmentStatus} </td>

                            <td> Omeke</td>

                        </tr>
                    </tbody>
                ))}

            </table>
        </div>
    )
}

export default UsersTable