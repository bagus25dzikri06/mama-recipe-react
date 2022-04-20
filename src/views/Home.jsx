import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Col, Row, Input, Button } from 'reactstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularRecipe from '../components/PopularRecipe';
import LatestRecipe from '../components/LatestRecipe';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Row>
        <Col md="6" tag="h1" style={style.fiveTimesFontSize}>
          <div style={style.search}>
            <b>Discover Recipe & Delicious Food</b> 
            <div className="form-group has-recipe-search">
                <img className="form-control-feedback" src="../images/314807_search_icon.svg" alt="background"
                width="30"
                height="30"/>
                <Input type="text" className="form-control" placeholder="Recipe Search" />
            </div>
          </div>
        </Col>
        <Col md="6">
            <img style={style.jumbotron} src="../images/Rectangle_2_(1).jpg" alt="background"
            width="220"
            height="560"/>
            <img className="lettuce" 
            src="https://s3-alpha-sig.figma.com/img/8096/57fe/ae617c591be597dfa703ef346d25f3fe?Expires=1650844800&Signature=H1P0oDUtt0h45SQT0kV5teNF51Pbg9VWQMoWbmd2N0LRuy2xmbZLL0Ym3B~Z7j~PlDEWGyWOfkDEPQ8z8NrWslzcRhv~9u~30Uf4AuK084H7iPNyY6TUxNOKT2Lmd2l6ZKhF9Za7zRokSgst7R0zSX7cLte7CnlOrVT5uz7cgxp6~bbSKo3dbk6uTFFZ1OOrXv1L-ZGDwvoyGFFDenZAzLIaiZLjHmvIubXc5s0dHCUGgnWqDk8vGldoP02WRcs~KX19tYNVOK3y2HZUD722CWXPU3Pme06MQKF191r59FKatdq5fGngeTTFxeEsXWkdP-wMufKk2EsNeZGa1u8Odg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="lettuce-wp" 
            width="284px"
            height="426px"/>
            <img className="food-recipe" 
            src="https://s3-alpha-sig.figma.com/img/bf39/a1ae/74c83c01c8ac904ba019b492bfb35c6c?Expires=1650844800&Signature=BUg8y0RSq~TVZR6mFcg2bMvN3SQaQxcMhJ-0bQqnAQ6~FI3q2NcVCiB4jK~TqIQcSUw9M2tTgiES0Xj7W66ifjx8gK7~2riFwyRi21ylcL3nMbEJjnkqrIqr16p3BIiuzJp7KwNtc7bWoVNmjURE2k5eBs-9h6DjPujr92kPCa2NN6W28B0SZcg~Y7VtTF5oo9WcOsrYFbQIpew9u~v2kzzHfNRlUG9-50oK2jJTJRUE5D8m0-gWJgMKrwXgivNGsTIjZn75PdByQ7PKTXzlOZD-NGeo7O5QgHc9tWUNmB~MdAdkm7FoJqxye9aIKB0SEHK0qFO3wREI7C2Zn1oDqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="food-wp" 
            width="378px"
            height="370px" />
        </Col>
      </Row>
      <Row>
        <Col md="12" tag="h5" style={style.search}>
            <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
            &nbsp;
            Popular For You!
        </Col>
      </Row>
      <PopularRecipe />
      <Row>
        <Col md="12" tag="h5" style={style.search}>
            <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
            &nbsp;
            New Recipe 
        </Col>
      </Row>
      <Row className='new-recipe'>
        <Col md="6" className='new-recipe-bg'>
            <img src="../images/Rectangle_2.jpg" alt="new-recipe-bg" width="214" height="320" />
            <img className="new-food-recipe" src="../images/Rectangle_313.jpg" alt="new-food-wp" width="380" height="380" />
        </Col>
        <Col md="6">
            <h4 style={style.fiveTimesFontSize}>Healthy Bone Broth Ramen (Quick & Easy)</h4>
            <hr width="17%" />
            <p className="text-start">Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <Button color="warning" className="col-3" href="#">
              <div style={style.white}>Learn More</div>
            </Button>
        </Col>
      </Row>
      <Row>
        <Col className="me-auto" md="12" tag="h5" style={style.search}>
            <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
            &nbsp;
            Popular Recipe 
        </Col>
      </Row>
      <LatestRecipe />
      <Footer />
    </div>
  );
};

export default Home;