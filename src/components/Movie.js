import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
    render() {
        return (
            <>
        {this.props.movieData.map(item => {
              return (

                <Col>
                <Card style={{ width: '25rem' }}>

                    <Card.Img variant="top" src={item.image_url} width="200" height="200" />

                    <Card.Body className="description">

                        <Card.Title className="title">Title: {item.title}</Card.Title>

                        <Card.Text className="description"></Card.Text>

                        <Card.Text className="description">
                            Average votes: {item.average_votes}
                        </Card.Text>
                        <Card.Text className="description">
                            Total votes: {item.total_votes}
                        </Card.Text>
                        <Card.Text className="description">
                            Popularity: {item.popularity}
                        </Card.Text>
                        <Card.Text className="description">
                            Released_on: {item.released_on}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>

  )
                })}
                   </>
        )
       
    }
}

export default Movie;