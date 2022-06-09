import React from 'react'
import { Button, Card } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import { IMG, IMG2, IMG3, SECTION, TEXT } from '../styles/StylesGlobales';

const Main = () => {
  return (
    <div className='d-flex flex-column'>
      <section className='d-flex mt-3'>
        <div>
          <img className='my-auto ms-4' src="https://i.ibb.co/kHHzYGM/LOGOLOGO-3.png" alt="" />
        </div>
        <div className='ms-auto me-3 d-flex gap-3'>
          <img className='my-auto' src="https://i.ibb.co/MBcBqxd/Vector.png" alt="" style={{ width: '27px', height: '24px' }} />
          <img className='my-auto' src="https://i.ibb.co/qjT0QQk/Vector-2.png" alt="" style={{ width: '24px', height: '24px' }} />
        </div>
      </section>

      <section className='d-flex justify-content-between mx-4 mt-3 gap-1'>
        <div>
          <IMG className='' src="https://i.ibb.co/jfhmjqS/Group-3.png" alt="" /><IMG2 src="https://i.ibb.co/h8KbMPT/Vector-3.png" alt="" />
          <h2 className='fs-6 text-center'>Your Story new story</h2>
        </div>
        <div>
          <IMG className='' src="https://i.ibb.co/jfhmjqS/Group-3.png" alt="" />
          <h2 className='fs-6 text-center'>Meli Mendoza</h2>
        </div>
        <div>
          <IMG className='' src="https://i.ibb.co/jfhmjqS/Group-3.png" alt="" />
          <h2 className='fs-6 text-center'>Meli Mendoza</h2>
        </div>
        <div>
          <IMG className='' src="https://i.ibb.co/jfhmjqS/Group-3.png" alt="" />
          <h2 className='fs-6 text-center'>Meli Mendoza</h2>
        </div>
        <div>
          <IMG className='' src="https://i.ibb.co/jfhmjqS/Group-3.png" alt="" />
          <h2 className='fs-6 text-center'>Meli Mendoza</h2>
        </div>
      </section>

      <div>
        <SECTION className='mx-auto d-flex flex-column p-3 mb-3'>
          <div className='d-flex ms-2'>
            <IMG3 src="https://i.ibb.co/xzw46k1/Group-11.png" alt="" />
            <h2 className='fs-5 ms-2'>Whitney Stevenson</h2>
          </div>
          <div className=''>
            <TEXT className='' >
              <Card.Img variant="top" src="https://i.ibb.co/xzw46k1/Group-11.png" />
              <Card.Body>
                <div className='d-flex gap-3'>
                  <div className='d-block'>
                    <img className='mx-1' src="https://i.ibb.co/MBcBqxd/Vector.png" alt="" />
                    <h2 className='fs-6'>300K</h2>
                  </div>
                  <div className='d-block'>
                    <img className='' src="https://i.ibb.co/JrX80Zh/Vector-4.png" alt="" />
                    <h2 className='fs-6'>87K</h2>
                  </div>
                  <div className='d-block'>
                    <img className='' src="https://i.ibb.co/QPPWMhF/Vector-5.png" alt="" />
                    <h2 className='fs-6'>10K</h2>
                  </div>
                  <div className='d-block ms-auto'>
                    <img className='mx-1' src="https://i.ibb.co/sqf9Lhs/Vector-11.png" alt="" />
                    <h2 className='fs-6'>10K</h2>
                  </div>
                </div>
                <TEXT.Text>
                  <span className='fs-2'>Jennie Kim</span> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Facilisi ullamcorper aliquam augue fermentum, vel, risus, adipiscing.
                  Tellus vestibulum magnis ut elit, vitae mattis sapien. Laoreet nam....
                </TEXT.Text>
              </Card.Body>
            </TEXT>
          </div>
        </SECTION>

        <SECTION className='mx-auto d-flex flex-column p-3 mb-3'>
          <div className='d-flex ms-2'>
            <IMG3 src="https://i.ibb.co/xzw46k1/Group-11.png" alt="" />
            <h2 className='fs-5 ms-2'>Whitney Stevenson</h2>
          </div>
          <div className=''>
            <TEXT className='' >
              <Card.Img variant="top" src="https://i.ibb.co/xzw46k1/Group-11.png" />
              <Card.Body>
                <div className='d-flex gap-3'>
                  <div className='d-block'>
                    <img className='mx-1' src="https://i.ibb.co/MBcBqxd/Vector.png" alt="" />
                    <h2 className='fs-6'>300K</h2>
                  </div>
                  <div className='d-block'>
                    <img className='' src="https://i.ibb.co/JrX80Zh/Vector-4.png" alt="" />
                    <h2 className='fs-6'>87K</h2>
                  </div>
                  <div className='d-block'>
                    <img className='' src="https://i.ibb.co/QPPWMhF/Vector-5.png" alt="" />
                    <h2 className='fs-6'>10K</h2>
                  </div>
                  <div className='d-block ms-auto'>
                    <img className='mx-1' src="https://i.ibb.co/sqf9Lhs/Vector-11.png" alt="" />
                    <h2 className='fs-6'>10K</h2>
                  </div>
                </div>
                <TEXT.Text>
                  <span className='fs-2'>Jennie Kim</span> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Facilisi ullamcorper aliquam augue fermentum, vel, risus, adipiscing.
                  Tellus vestibulum magnis ut elit, vitae mattis sapien. Laoreet nam....
                </TEXT.Text>
              </Card.Body>
            </TEXT>
          </div>
        </SECTION>
      </div>


      <NavBar />
    </div>
  )
}

export default Main;