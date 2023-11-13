import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgdropdown from './../../assets/images/rishabh-malhotra-83ypHTv6J2M-unsplash(1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  
  document.addEventListener("DOMContentLoaded", function() {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
    
            .then(data => {
      

                const countryList = document.getElementById("countryList");
                
                data.forEach(country => {
                    
                    const countryName = country.cca2;
                    const flag = country.flags.svg;
    
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `<a className="dropdown-item" href="#" onclick="displayCountryInfo('${countryName}', '${flag}')">${countryName}</a>`;
                    countryList.appendChild(listItem);
    
                });
            })
            .catch(error => console.log(error));
    });
    let countryInfo;
    let flag;
    function displayCountryInfo(countryName, flag) {
          countryInfo = document.getElementById("countryInfo");
          countryInfo.innerHTML = `<h2>${countryName}</h2><img src="${flag}" alt="${countryName} Flag"/>`;
      }
     displayCountryInfo(countryInfo,flag)
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='text-logo'>PHONO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#features" className='zh-home'><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#about"><Link to='/about'>about</Link></Nav.Link>
            <Nav.Link href="#service"><Link to='/service'>service</Link></Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <Nav.Link href="#pricing">Android</Nav.Link>
            
                      <li href="#" className="nav-item dropdown " >
                      <a className="nav-link dropdown-toggle d-flex gap-3 text-black fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" 
                      >
                      <div id="countryInfo" className="d-flex flag"></div>
                    </a>
                    <ul className="dropdown-menu basic" aria-labelledby="dropdownMenuButton" id="countryList">
                        <div className="innerul">
                          <li className="mx-1">
                                      <div className="nav-item dropdown ">
                                <div className="contain">
                                          <ul className="dropdown-menu">
                                  
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              </div>
                              </ul>
                      </li>
            <NavDropdown title="Pages" id="collapsible-nav-dropdown" >
              
              <NavDropdown.Item href="#action/3.1">About us
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact us
              
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog
            
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Faq's</NavDropdown.Item>
            
              
            </NavDropdown>
            <NavDropdown title="Collection" id="collapsible-nav-dropdown">
              <div className='inner-dropdown'>
              <NavDropdown.Item href="#action/3.1">Action
                <div>
                <hr/>
                          <p className="px-1">Affinity M20</p>
                          <p className="px-1 ">Affinity P40</p>
                          <p >PO V40 THinQ</p>
                          <p className="px-1">TENCHO 7.3</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
                <div>
                <hr/>
                        <p className="px-1">SPOTS 8Lights</p>
                        <p className="px-1">SPOTS ERA 5X</p>
                        <p className="px-1"> TENCHO 8.1</p>
                        <p className="px-1">PHONELINK</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something
              <div>
              <hr/>
                          <p className="px-1">T-BLAST</p>
                          <p className="px-1">ALCATEL</p>
                          <p className="px-1"> AMPY</p>
                          <p className="px-1">CRYSTAL CELL</p>
              </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
                <div>
                <hr/>
                          <p className="px-1">TENCHO 10 Lite</p>
                          <p className="px-1">TENCHO 7.3</p>
                          <p class="px-1"> SPECTRUM</p>
                          <p className="px-1">HISENSE</p>
                </div>
                
                
              </NavDropdown.Item>
              <div className='innerimg'><img src={imgdropdown}/></div>
              </div>
              
            </NavDropdown>
            <Nav.Link href="#"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>

      

    </Navbar>


    </div>
    
  )
}

export default NavBar