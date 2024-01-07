import React from 'react'

export default function Footer_Component() {
  const dataPartner = [{
    link: "https://www.cgv.vn/",
    img: "../img/partner/1.png",
  },
  {
    link: "https://www.bhdstar.vn/",
    img: "../img/partner/2.png",
  }, {
    link: "https://www.galaxycine.vn/",
    img: "../img/partner/4.png",
  }, {
    link: "http://cinestar.com.vn/",
    img: "../img/partner/5.png",
  }, {
    link: "https://lottecinemavn.com/LCHS/index.aspx",
    img: "../img/partner/6.png",
  }, {
    link: "https://www.megagscinemas.vn/",
    img: "../img/partner/7.png",
  }, {
    link: "http://ddcinema.vn/",
    img: "../img/partner/8.png",
  }, {
    link: "https://www.betacinemas.vn/home.htm",
    img: "../img/partner/9.png",
  }, {
    link: "https://touchcinema.com/",
    img: "../img/partner/10.png",
  }, {
    link: "https://cinemaxvn.com/",
    img: "../img/partner/11.png",
  }, {
    link: "hhttps://starlight.vn/",
    img: "../img/partner/12.png",
  }, {
    link: "https://www.dcine.vn/",
    img: "../img/partner/13.png",
  }, {
    link: "https://zalopay.vn/",
    img: "../img/partner/14.png",
  }, {
    link: "https://www.payoo.vn/",
    img: "../img/partner/15.png",
  }, {
    link: "https://portal.vietcombank.com.vn/Pages/Home.aspx?devicechannel=default",
    img: "../img/partner/16.png",
  }, {
    link: "https://www.agribank.com.vn/",
    img: "../img/partner/17.png",
  }, {
    link: "https://www.vietinbank.vn/web/home/vn/index.html",
    img: "../img/partner/18.png",
  }, {
    link: "https://www.indovinabank.com.vn/",
    img: "../img/partner/19.png",
  }, {
    link: "https://webv3.123go.vn/",
    img: "../img/partner/20.png",
  }, {
    link: "https://laban.vn/",
    img: "../img/partner/21.png",
  },
  ]

  const renderPartner = () => {
    return dataPartner.map((item) => {
      return (
        <div key={item.link} className='col-3 p-1'>
          <a href={item.link}>
            <img style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }} src={item.img} />
          </a>
        </div>
      )
    })
  }
  return (
    <div
      style={{ background: "#212121" }}>

      <footer className="text-center text-lg-start text-light container">

        {/* Section: Social media */}
        <section className="row p-4 border-bottom">

          <div className='col-6 col-sm d-flex justify-content-center justify-content-lg-center'>
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href='https://www.facebook.com/thangbestsaler' className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href='https://www.youtube.com/@duythangpham5719/videos' className="me-4 text-reset">
                <i className="fab fa-youtube"></i>
              </a>
              <a href='https://gitlab.com/duythangtb95' className="me-4 text-reset">
                <i className="fab fa-gitlab"></i>
              </a>
              <a href='https://github.com/PhamDuyThang' className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
              <a href='https://zalo.me/0366268636' className="me-4 text-reset">
                <img alt="" src="./img/imgzalo.png" width="20" />
              </a>

            </div>
          </div>

          <div className='col-6 col-sm d-flex justify-content-center justify-content-lg-center'>
            <div className="me-5 d-none d-lg-block">
              <span>Mobile app:</span>
            </div>
            <div>
              <a href='https://apps.apple.com/vn/developer/apple/id284417353?l=vi&mt=12r' className='me-4 text-reset fs-5'><i className="fab fa-apple"></i></a>
              <a href='https://play.google.com/store/apps' className='me-4 text-reset fs-5'><i class="fab fa-android"></i></a>
            </div>
          </div>

          {/* Right */}
        </section>

        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className=' border-bottom'>
          <div className="container text-center text-md-start my-2">
            <div className="mx-auto my-1 text-center">
              {/* Content */}
              <h5 className="text-uppercase fw-bold">
                <i className="fa fa-film"></i> Phạm Duy Thắng
              </h5>
            </div>
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}

              {/* Grid column */}
              <div className='col-md-12 col-lg-3 mx-auto text-center'>
                <h6 className="text-uppercase fw-bold">
                  <i className="fa fa-film"></i> Đối tác:
                </h6>
                <div className='row'>
                  {renderPartner()}
                </div>
              </div>
              {/* Grid column */}
              <div className="col-sm-6 col-md-4 col-lg-3 mx-auto text-center">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-sm-6 col-md-4 col-lg-3 mx-auto text-center">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-sm-12 col-md-4 col-lg-3 mx-auto text-center">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <p><i className="fas fa-home me-3" /> Minh Khai, Vũ Thư, Thái Bình -- VN</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  duythangtb95@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> 0366268636</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://www.facebook.com/thangbestsaler">Phạm Duy Thắng</a>
          <img alt="" src="http://demo1.cybersoft.edu.vn/static/media/daThongBao-logo.cb85045e.png" width="100"></img>
        </div>
      </footer>
    </div>
  )
}
