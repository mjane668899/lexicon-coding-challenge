import React, { useState, useEffect } from "react";
import "./card.css";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "antd/dist/antd.css";
import { Card, Space } from "antd";

// const { Content } = Layout;
const { Meta } = Card;

// This is a card container

export default function CardContainer({ children, ...restProps }) {
  const [itemsCinemaworld, setItemsCinemaworld] = useState([]);

  useEffect(() => {
    fetchCinemaworldItems();
    const interval = setInterval(() => {
      fetchCinemaworldItems();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchCinemaworldItems = async () => {
    const data = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movies",
      { headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" } }
    );
    // console.log(data);
    const items = await data.json();
    // console.log(data);
    // console.log(data.json.Movies);
    // console.log(items.Movies);
    setItemsCinemaworld(items.Movies);
  };
  return (
    <div className="container-container">
      <Space size={[8, 16]}>
        <Row gutter={10}>
          {itemsCinemaworld.map((item, index) => (
            <Col md={{ span: 3 }} justify={"space - between"} key={index}>
              <Card hoverable className="card" key="id">
                <img
                  alt="allMovie"
                  key={item.id}
                  src={`${item.Poster}.jpg`}
                  width="100%"
                  height="400px"
                />
                <Meta title={item.Title} description={item.ID}></Meta>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
}
