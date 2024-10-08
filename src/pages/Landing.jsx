import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const Landing = () => {
  return (
    <div style={{ paddingTop: '80px' }} className='container'>
      {/* Landing head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero, vitae illum ad iure consequuntur odit excepturi nemo incidunt sit at explicabo nisi ipsa quam. Earum et officia nulla blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias rerum asperiores id laudantium eligendi dolor quos iure architecto adipisci enim, doloremque, consequatur saepe magnam molestiae ab blanditiis. Ullam, explicabo?
          </p>
          <Link to={'/home'} className='btn btn-info'>Get Started!!</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  User can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  User can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '20rem'}}>
              <Card.Img style={{height:'13rem'}} variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  User can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos modi tempore, deserunt provident cum quod quisquam mollitia nam non perspiciatis obcaecati delectus hic quis harum error numquam pariatur nulla!</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos modi tempore, deserunt provident cum quod quisquam mollitia nam non perspiciatis obcaecati delectus hic quis harum error numquam pariatur nulla!</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eos modi tempore, deserunt provident cum quod quisquam mollitia nam non perspiciatis obcaecati delectus hic quis harum error numquam pariatur nulla!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="600" height="514" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing