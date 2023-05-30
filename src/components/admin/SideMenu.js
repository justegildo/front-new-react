import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Admin/admin.css'

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                <li>
                    <Link to='/admin/ingredient'>Ingrédient</Link>
                </li>
                <li>
                    <Link to='/admin/recette'>Recette</Link>
                </li>
                <li>
                    <Link to='/admin/commande'>Commande</Link>
                </li>
                <li>
                    <Link to='/admin/fournisseur'>Fournisseur</Link>
                </li>
                <li>
                    <Link to='/admin/ligne'>Ligne</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;