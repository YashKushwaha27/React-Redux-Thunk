import React from "react";
import { Card, CardGroup, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <CardGroup itemsPerRow={5}>
      {props?.data ? (
        props.data.map((m) => (
          <Card key={m.id} data-testid="productCard">
            <Card.Content>
              <div style={{ height: "270px" }}>
                <Image src={m.image} size="small" />
              </div>

              <Card.Description>
                <Card.Header>
                  <div style={{ height: "60px", overflowY: "scroll" }}>
                    <Link
                      to={{
                        pathname: `product/${m.id}`,
                        state: {
                          prod_id: m.id,
                        },
                      }}
                      data-testid="linkToSelectedProduct"
                    >
                      {" "}
                      Name - {m.title}
                    </Link>
                  </div>
                </Card.Header>
                <Card.Header>$ {m.price}</Card.Header>
                <Card.Meta>
                  <div
                    style={{
                      height: "200px",
                      overflowY: "scroll",
                      padding: "15px 15px 15px 15px",
                    }}
                  >
                    {m.description}
                  </div>
                </Card.Meta>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Header>
                <Icon name="star" />
                {m.rating.rate} / 5
              </Card.Header>
            </Card.Content>
          </Card>
        ))
      ) : (
        <h1>Data loading.....</h1>
      )}
    </CardGroup>
  );
}
