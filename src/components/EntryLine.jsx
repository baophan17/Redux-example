import React from 'react'
import { Segment, Grid, Icon, Container, Button } from 'semantic-ui-react'
function EntryLine(props) {
    const

        {
            id,
            description,
            value,
            isExpense = false,
            deleteEntry,
            editEntry
        }
            = props;
    return (
        <Container>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={8} textAlign='left'>{description}</Grid.Column>
                        <Grid.Column width={3}>{"$" + value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Button
                                className="ui icon button"
                                onClick={() => editEntry(id)}
                            >
                                <Icon name='edit' />
                            </Button>
                            <Button
                                className="ui icon button"
                                onClick={() => deleteEntry(id)}
                            >
                                <Icon name='trash' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}

export default EntryLine