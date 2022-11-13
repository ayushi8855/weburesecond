import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  return (
    <div className="App">
      <div className='maindiv'>
        <div>
          <Navbar collapseOnSelect expand="lg" >
            <Container>
              <Navbar.Brand href="#home">Datify</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >

                <Nav className="me-auto navi">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">Members</Nav.Link>
                  <Nav.Link href="#pricing">blog</Nav.Link>
                  <Nav.Link href="#pricing">privacy</Nav.Link>
                  <Nav.Link href="#pricing">contact</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Login</Nav.Link>
                  <p className='register rounded ' >
                    Register
                  </p>
                </Nav>


              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className='container'>
          <div className='row  '>
            <div className='col-lg-5 col-sm-12  p-3 '>
              <p className='fs-6 mt-5 samefortext coloro' >Becaue you deserve better!</p>
              <h1 className='h11'>
                Get noticed for <span style={{ color: "rgba(237, 155, 89, 1)" }}>who</span><br/> you are, <span style={{ color: "rgba(237, 155, 89, 1)" }}>not what</span>  <br/> you look like.
              </h1>
              <p className=' samefortext'>You’re more than just a photo. You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Because you deserve what dating deserves: better.</p>
              <div className='p-2'>
                <div className='  rounded-5 bg-white d-flex p-2 d-flex justify-content-between row inpbox' >
                  <div className='col-2'>

                  </div>
                  <div className='col-7'><input type="p" placeholder='Enter your email' className='inp p-1' /></div>
                  <div className='col-3' >
                    <button className='inp1 rounded-5 p-2' >Get Started</button>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <div className='row'>
                  <div className='col-4'>
                    <h2 className='h11'>15k+</h2>
                    <p className='samefortext fs-6'>Dates and matches
                      made everyday</p>
                  </div>
                  <div className='col-4'>
                    <h2 className='h11 coloro'>1,456</h2>
                    <p className='samefortext fs-6'>New members
                      signup every day</p>
                  </div>
                  <div className='col-4'>
                    <h2 className='h11'>1M+</h2>
                    <p className='samefortext fs-6'>Members from
                      around the world</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-lg-7 col-sm-12  p-3'>
              <div className='img-div' style={{ position: "relative" }}>
              <div className=' p-2 d-flex justify-content-between top-middle '>
                  <div className="animated grow1">
                    <img src="https://www.linkpicture.com/q/Path-1.png" alt="" />
                  </div>
                  <div  className="animated grow1 " >
                  <img src="https://www.linkpicture.com/q/Union.png" alt="" style={{backgroundColor:"#EE0F32"}} />
                  </div>
                </div>

                <div className=' p-3 d-flex justify-content-between top-icon '>
                  <div className="animated grow">
                    <img src="https://www.linkpicture.com/q/Union.png" alt="" style={{backgroundColor:"#EE0F32"}} />
                  </div>
                  <div className="animated grow">
                  <img src="https://www.linkpicture.com/q/Union-Stroke.png" alt="" />
                  </div>
                </div>
                <div className=' p-3 right-div row' >
                  <div className=' col-6 '>
                    <div className='d-flex justify-content-between  w-100' >
                      <div className=' bg-white mw'  >
                        <p>Male</p>
                      </div>
                      <div className=' cowhite mw'>
                        <p>30-35 years</p>
                      </div>
                      <div className=' bg-white mw'>
                        <p>New York</p>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between mt-2  p-2 small first'>
                      <div>
                        <img src="https://www.linkpicture.com/q/Rectangle-462.png" alt="" />
                      </div>
                      <div>
                        <h6>Angela Taylor</h6>
                        <p>Cincinati, OH</p>
                      </div>
                      <div>
                        <button>Select</button>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between mt-2  p-2 small'>
                      <div>
                        <img src="https://www.linkpicture.com/q/Rectangle-462-1.png" alt="" />
                      </div>
                      <div>
                        <h6>Mike jhonson</h6>
                        <p>NY City , Ny</p>
                      </div>
                      <div>
                        <button>Select</button>
                      </div>
                    </div>

                  </div>
                  <div className='col-6'>
                    <div className="cardj"  >
                      <div className='star'>
                        <img src="https://www.linkpicture.com/q/Fill-211.png" alt="" />
                      </div>
                      <div className='cardnumber'>
                        <p>CARD NUMBER</p>
                        <h2>3829 4820 4629 5025</h2>
                      </div>
                      <div className='d-flex justify-content-between'> 
                        <div className='p-2 ' >
                        <p className='p-2 ptag'>CARD HOLDER NAME</p>
                        <h5>Anita Rose</h5>
                        </div>
                        <div>
                        <p className='p-2 ptag'>VAID THRU</p>
                        <h5>09/17</h5>
                        </div>
                      </div>
                      <div className='moon'>
                       <img src="https://www.linkpicture.com/q/Fill-421.png" alt="" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
