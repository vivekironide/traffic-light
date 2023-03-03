import { Button, Card, Col, Row } from "antd";
import Meta                              from "antd/es/card/Meta";
import React, { useEffect, useState }    from "react";
import { default as axios }         from "axios";
import { useDispatch } from "react-redux";
import { useNavigate }              from "react-router-dom";
import { addTitle }                      from "../../app/starwars";

export default function StarwarsList() {
  const [list, setList] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(addTitle('Starwars'))
    
    axios.get('https://swapi.dev/api/people')
         .then(function (response) {
           console.log(response);
           
           setList(response.data.results.slice(0, 10))
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .finally(function () {
           // always executed
         });
  },[])
  
  return (
    <>
      <Row gutter={[50, 100]} justify={"space-around"} align={"middle"} style={{marginTop: '4rem'}}>
        {
          list?.map((people, key) => (
            <Col span={5} key={key}>
              <Card hoverable bordered={false} cover={<img alt="example" src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg" />}>
                  <Meta title={people.name} style={{textAlign: "center"}} description={<Button type="primary" htmlType="submit" onClick={e => {navigate(people.url.replace('https://swapi.dev/api/people/', ''))}}>Details</Button>} />
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  )
}