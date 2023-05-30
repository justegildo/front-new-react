import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ALayout, Commande, Dashboard, Fournisseur, Ingredient, Ligne, Recette } from '../Admin'
import Error from '../../_utils/Error';



const AdminRoute = () => {
    return (
        <Routes>

            <Route element={<ALayout />} >
                <Route index element={<Dashboard />} />

                <Route path='dashboard' element={<Dashboard />} />

                <Route path='ingredient' element={<Ingredient />} />

                <Route path='recette' element={<Recette />} />

                <Route path='commande' element={<Commande />} />

                <Route path='fournisseur' element={<Fournisseur />} />

                <Route path='ligne' element={<Ligne />} />

            </Route>

            <Route path='*' element={<Error />} />

        </Routes>
    );
};

export default AdminRoute;