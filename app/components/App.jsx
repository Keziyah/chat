import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import ChatSpace from './ChatSpace'

const App = () => {
    return (
    <Grid>
        <Row>
            <ChatSpace talkingTo={"Laura"} from={"Rob"} />
            <ChatSpace talkingTo={"Rob"} from={"Laura"} />
        </Row>
    </Grid>
    )
}

export default App
