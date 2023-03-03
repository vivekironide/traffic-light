import { Button, Col, Row, Space, Typography } from "antd";
import React, { useEffect, useState }          from "react";
import { default as axios }                    from "axios";
import { useDispatch }                         from "react-redux";
import { useParams }     from "react-router-dom";
import { add, addTitle } from "../../app/starwars";

export default function StarwarsDetail() {
  const [detail, setDetail] = useState()
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(addTitle('Starwars'))
    
    axios.get('https://swapi.dev/api/people/' + id)
         .then(function (response) {
           console.log(response);
  
           setDetail(response.data)
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
  },[id])
  
  const handleFavorites = (name) => {
    dispatch(add(name))
  }
  
  return (
    <>
      <Row style={{marginTop: '8rem'}}>
        <Col span={6} offset={5}>
          <img alt="example" src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg" style={{width: '340px'}} />
        </Col>
        
        <Col span={5}>
          <Space direction={"vertical"} size={"large"}>
            <Typography.Text>Name: {detail?.name}</Typography.Text>
            <Typography.Text>Height: {detail?.height}</Typography.Text>
            <Typography.Text>Mass: {detail?.mass}</Typography.Text>
            <Typography.Text>Hair Color: {detail?.hair_color}</Typography.Text>
            <Typography.Text>Skin Color: {detail?.skin_color}</Typography.Text>
            <Typography.Text>Gender: {detail?.gender}</Typography.Text>
            <Typography.Text>Films: </Typography.Text>
            <ul>
              {detail?.films.map((film, key) => (
                <li style={{color: 'white'}} key={key}>
                  {film}
                </li>
              ))}
            </ul>
            <Button type="primary" htmlType="submit" onClick={e => handleFavorites(detail?.name)}>Add to favorites</Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}