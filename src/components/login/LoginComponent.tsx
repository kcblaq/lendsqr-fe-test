import React, {useState} from 'react'
import "./styles.scss"
import {Link, useNavigate} from "react-router-dom"
// import * as Yup from "yup"
// import {Formik} from 'formik'


// const validation = Yup.object().shape({
//   Email: Yup.string().required(),
//   Password: Yup.string().required()
// })

function LoginComponent() {
const [type, setType] = useState('password')
const [email, setEmail] = useState('')
const [password, setPasswor] = useState('')

const navigate = useNavigate()


  const root = process.env.PUBLIC_URL
  return (
    <div className="container">
     <section className='left'>
      <img src={root + 'asset/logo.svg'} alt='logo' />
      <img src={root + '/asset/pablo-sign-in.svg'} alt='signin' />
     </section>
     <section className='right'>
   <h3> Welcome!</h3>
   <p > Enter details to login.</p>
   
   <form>
    <input type='email' placeholder='Email' value={email}   onChange={(e) => setEmail(e.target.value)}/>
   <input type={type}  placeholder='Password' value={password} onChange={(e) => setPasswor(e.target.value)} />
  
 
    
  
    <Link to='/reset' className='reset'> FORGOT PASSWORD?  </Link>
    <button onClick={() => navigate('/dashboard')} type="button" className='btn'> LOG IN</button>
   </form>
     </section>
    </div>
  )
}

export default LoginComponent