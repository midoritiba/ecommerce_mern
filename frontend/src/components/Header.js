import { Navbar, Nav, NavDropdown,Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

return (
    <header>
        <Navbar className='text-center' expand="lg" collapseOnSelect>

            <Container fluid>
                
                {/* LOGO IMAGE CONTAINER */}
                <LinkContainer className='ms-3'  to='/'  style={{ cursor: "pointer" }}>
                    <Image src={process.env.PUBLIC_URL + "/images/logo2.png"} className='brand-name' />
                </LinkContainer>
                
                {/* NAVBAR */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* NavItem */}
                            <LinkContainer to='/'>
                                <Nav.Link className="text-center ps-lg-4">HOME</Nav.Link>
                            </LinkContainer>
                            {/* NavDropdown */}
                            <NavDropdown className="text-center ps-lg-4" title="CATEGORIES" id="basic-nav-dropdown">
                                <LinkContainer to='/skincare'>
                                    {/* NavDropdown Item */}
                                    <NavDropdown.Item className="ps-4 text-center">
                                        <div className="pull-left dropdown-item-nav">
                                            <img className="thumbnail-image me-4" 
                                            src={process.env.PUBLIC_URL + "/images/category_skincare.png"}  
                                            alt="user pic"/>
                                            Skin Care
                                        </div>
                                    </NavDropdown.Item>
                                </LinkContainer>
                            <LinkContainer to='/bodylotion'>
                                {/* NavDropdown Item */}
                                <NavDropdown.Item className="ps-4 text-center">
                                    <div className="pull-left dropdown-item-nav">
                                        <img id="thumbnail-image " className="thumbnail-image me-4" 
                                        src={process.env.PUBLIC_URL + "/images/category_bodycream.png"}  
                                        alt="user pic"/>
                                        Body Cream
                                    </div>
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/makeup'>
                                {/* NavDropdown Item */}
                                <NavDropdown.Item className="ps-4 text-center">
                                    <div className="pull-left dropdown-item-nav">
                                        <img className="thumbnail-image me-4" 
                                        src={process.env.PUBLIC_URL + "/images/category_makeup.png"}  
                                        alt="user pic"/>
                                        Make Up
                                    </div>
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/accessories'>
                            {/* NavDropdown Item */}
                            <NavDropdown.Item className="ps-4 text-center">
                                    <div className="pull-left dropdown-item-nav">
                                        <img className="thumbnail-image me-4" 
                                    src={process.env.PUBLIC_URL + "/images/category_accessories.png"}  
                                    alt="user pic"/>
                                        Accessories
                                    </div>
                            </NavDropdown.Item>
                            </LinkContainer>
                            </NavDropdown>
                            {/* End NavDropDown */}

                            {/* NavItem */}
                            <LinkContainer to='/sale'>
                                <Nav.Link className="text-center ps-lg-4">SALE</Nav.Link>
                            </LinkContainer>
                            
                            {/* NavItem */}
                            <LinkContainer to='/cart'>
                                <Nav.Link className="text-center ps-lg-4"><i className='fas fa-shopping-cart ps-2' style={{color: 'white'}}></i>CART</Nav.Link>
                            </LinkContainer>
                              {/* <NavDropdown title='User Name' id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item className="text-center">Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item  className="text-center">
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            {/* NavItem */}
                            <LinkContainer to='login'>
                                <Nav.Link className="text-center ps-lg-4 pe-lg-4"><i className='fas fa-user ps-2'></i>SIGN IN</Nav.Link>
                            </LinkContainer>

                                {/* <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )};
        
export default Header;