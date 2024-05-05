import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
function EntryLines(props) {
    const { entries } = props;
    return (
        <Container>
            {
                entries && entries.map((entry) =>
                    <EntryLine
                        key={entry.id}
                        {...entry}
                    />

                )
            }
        </Container>

    )
}

export default EntryLines