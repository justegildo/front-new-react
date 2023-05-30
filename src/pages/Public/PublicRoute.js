import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout, Home, About, Contact} from '../Public'
import Error from '../../_utils/Error'; 


const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />  
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='*' element={<Error />} />

            </Route>

        </Routes>
    );
};

export default PublicRoute;