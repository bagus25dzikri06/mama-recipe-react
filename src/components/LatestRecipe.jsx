import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Col, Container, Row, CardImgOverlay } from 'reactstrap';
import axios from 'axios';
import style from '../assets/styles/styles';

const PopularRecipe = () => {
  const [ recipes, setRecipes ] = useState({
    'code': 0,
    'status': '',
    'data': []
  });

  useEffect(() => {
    axios.get('http://localhost:5000/latest')
    .then((res) => {
      setRecipes(res.data);
    }).catch((err) => {
      return err;
    });
  }, []);

  const getColumnsForRecipeRow = () => {
    return recipes.data.map((e, i) => {
        return (<div>
            <Col key={i} className="py-2">
              <a href="#">
                <Card className="box-shadow border-0">
                    <CardImg
                        alt="Card image cap"
                        src={`http://localhost:5000/recipes/image/${e.filename}`}
                        top
                        width="400" 
                        height="400"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h6" style={style.centerText} className="recipe-title card-footer">{ e.title }</CardTitle>
                    </CardImgOverlay>
                </Card>
              </a>
            </Col>
        </div>);
    });
  };

  return (
    <>
      <Container>
          <Row xs={1} md={3}>
             {getColumnsForRecipeRow()}
          </Row>
      </Container>
    </>
  );
};

export default PopularRecipe;