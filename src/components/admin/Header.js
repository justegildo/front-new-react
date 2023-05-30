import React from 'react';
import '../../pages/Admin/admin.css'
import { accountService } from '../../_services/account.service';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    
    const logout = ()=>{
        accountService.logout()
        navigate('/')
    }

    return (
        <div className='AHeader'>
            header
            <button onClick={logout}>Se déconnecter</button>
        </div>
    );
};

export default Header;