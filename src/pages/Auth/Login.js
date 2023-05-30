import React, { useState } from 'react';
import './auth.css'
import { useNavigate } from "react-router-dom";
import { accountService } from '../../_services/account.service';



const Login = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        //console.log(credentials);
        accountService.login(credentials)
            .then(response => {
                console.log(response);
                setLoading(false);
                accountService.saveToken(response.data.token)
                accountService.saveUilisateur(JSON.stringify(response.data.user, null, 2))
                navigate('/admin')
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })


    }

    return (
        <div className='login'>
            <h1 className='text-center'>Re-Recipe</h1>

            <form className="" onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor="email" className='form-label'>Email </label>
                    <input id='email' name='email' type='email'
                        className='form-control' onChange={onChange}
                        placeholder='Entrez votre adresse email' required
                    />
                </div>

                <div className='form-group '>
                    <label htmlFor='password' className='form-label' >Mot de passe</label>
                    <input id='password' name='password' type='password'
                        className='form-control' onChange={onChange} minLength='8'
                        placeholder='Saisissez votre mot de passe' required
                    />
                </div>
                <div className='password'>
                    <small> <a href='/auth/login'>Mot de passe oublié ?</a></small>
                </div>

                <div >

                    <button className='btn btn-success w-100' type='submit' disabled={loading} >
                        {loading ? (
                            <div className="">
                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                En cours...
                            </div>
                        ) : (
                            'ENVOYER'
                        )}
                    </button>


                </div>

            </form>
        </div>
    );
};

export default Login;