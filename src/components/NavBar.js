import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function NavBar() {

  const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const handleSearch = (event) => {
  event.preventDefault();
  if (searchTerm.trim()) {
    navigate(`/productos/${searchTerm.trim().toLowerCase()}`);
    setSearchTerm('');  
  }
};


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="productos/femenino">Seleccion Femenina</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="productos/niños">Niños</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/productos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/productos/remeras">Remeras</Link></li>
            <li><Link className="dropdown-item" to="/productos/pantalones">Pantalones</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" to="/productos/buzos">Buzos</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <CartWidget/>
      </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Buscar productos..." 
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}>
        </input>
        <button className="btn btn-primary search-btn" type="submit">Buscar 
        <img className='busqueda' src='https://cdn-icons-png.flaticon.com/512/2866/2866321.png'></img>
        </button>
      </form>
      
    </div>
  </div>
</nav>
    </div>
  )
}
