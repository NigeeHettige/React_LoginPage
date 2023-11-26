import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login',{email,password})
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='p-3 bg-white w-25'>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' onChange={e => setEmail(e.target.value)}></input>
                </div>

                <div  className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>Login</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login