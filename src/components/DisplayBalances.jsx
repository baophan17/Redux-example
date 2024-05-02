import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'
function DisplayBalances(props) {
    const { incomeTotal, expenseTotal } = props;
    return (
        <Segment textAlign='center'>
            <Grid
                columns={2}
                divided
            >
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            title='Income:'
                            value={`$${incomeTotal}`}
                            size='tiny'
                            color='green'
                            textAlign='left'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            title='Expenses:'
                            value={`$${expenseTotal}`}
                            size='tiny'
                            color='red'
                            textAlign='left'

                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances