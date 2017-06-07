import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'

const App = () => {
    return (
    <Grid>
        <Row>
            <Col sm={6}>
                <ChatHistory />
                <NewMessage />
            </Col>
            <Col sm={6}>
                <ChatHistory />
                <NewMessage />
            </Col>
        </Row>
    </Grid>
    )
}

export default App; 