import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'

const App = () => {
    return (
    <Grid>
        <Row>
            <Col sm={6}>
                <ChatHistory talkingTo={"Laura"} from={"Rob"}/>
                <NewMessage name={"Rob"}/>
            </Col>
            <Col sm={6}>
                <ChatHistory talkingTo={"Rob"} from={"Laura"}/>
                <NewMessage name={"Laura"}/>
            </Col>
        </Row>
    </Grid>
    )
}

export default App; 