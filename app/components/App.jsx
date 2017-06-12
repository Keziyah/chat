import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import ChatSpace from './ChatSpace'
require("!style-loader!css-loader!sass-loader!./sass/stylesheets/main.scss");


const App = () => {
    return (
    <Grid >
        <Row className="container">
            <ChatSpace talkingTo={"Rob"} from={"Laura"} />
            <ChatSpace talkingTo={"Laura"} from={"Rob"} />
        </Row>
    </Grid>
    )
}

export default App
