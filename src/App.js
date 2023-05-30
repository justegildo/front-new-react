import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PublicRoute from './pages/Public/PublicRoute';
import AdminRoute from './pages/Admin/AdminRoute';
import {Routes, Route} from 'react-router-dom'
import AuthRoute from './pages/Auth/AuthRoute';
import AuthGuard from './_helpers/AuthGuard';

function App() {
  return (
    <div className="">
      <Routes>

        <Route path='/*' element={<PublicRoute />} /> 
        <Route path='/admin/*' element={
          <AuthGuard>
            <AdminRoute />
          </AuthGuard>
          
        } />
        <Route path='/auth/*' element={<AuthRoute/>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
