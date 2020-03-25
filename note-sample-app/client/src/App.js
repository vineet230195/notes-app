import React from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import CategoryList from './components/category/CategoryList'
import NotesList from './components/notes/NotesList';
import NoteForm from './components/notes/NotesForm'
import Register from './components/user/Register'
import Login from './components/user/Login'
import Logout from './components/user/logout'
import Account from './components/user/Account'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
        <BrowserRouter>
          {
                (localStorage.getItem('authToken')) ? (
                  <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                  <div className="container">
                      <strong className="navbar-brand">Notes App</strong>
                      <ul className="navbar-nav">
                          <li className='nav-item mr-2'><Link to="/">Home</Link></li>
                          <li className='nav-item mr-2'><Link to='/notes'>Notes</Link></li>
                          <li className='nav-item mr-2'><Link to='/categories'>Categories</Link></li>
                          <li className='nav-item mr-2'><Link to='/users/account'>Account</Link></li>
                          <li className='nav-item mr-2'><Link to='/users/logout'>Logout</Link></li>

                      </ul>
                  </div>
              </nav>
                    // <div className='container'> 
                    //     <Link to="/">Home</Link>|
                    //     <Link to='/notes'>Notes</Link>|
                    //     <Link to='/categories'>Categories</Link>|
                    //     <Link to='/users/account'>Account</Link>|
                    //     <Link to='/users/logout'>Logout</Link>
                    
                    // </div> 
                    ) : (
                      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                      <div className="container">
                          <strong className="navbar-brand">Notes App</strong>
                          <ul className="navbar-nav">
                              <li className='nav-item mr-2'><Link to="/">Home</Link></li>
                              <li className='nav-item mr-2'><Link to="/users/login">Login</Link></li>
                              <li className='nav-item mr-2'><Link to="/users/register">Register</Link></li>
                          </ul>
                      </div>
                  </nav>
                        // <div>
                        //     <Link to="/">Home</Link>|
                        //     <Link to="/users/login">Login</Link>|
                        //     <Link to="/users/register">Register</Link>
                        // </div> 
                    ) 
            }

            
          <Route path='/' component={Home} exact={true}/>
          <Route path='/users/register' component={Register}/>
          <Route path='/users/login' component={Login}/>
          <Route path='/users/account' component={Account}/>
          <Route path='/users/logout' component={Logout}/>
          <Route path='/notes' component={NotesList} exact={true}/>
          <Route path='/notes/add' component={NoteForm}/>
          <Route path='/categories' component={CategoryList}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
