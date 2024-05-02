import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
function EntryLines(props) {
    const { entries, deleteEntry, editEntry } = props;
    return (
        <Container>
            {
                entries && entries.map((entry, index) =>
                    <EntryLine
                        key={entry.id}
                        {...entry}
                        deleteEntry={deleteEntry}
                        editEntry={editEntry}
                    />

                )
            }
        </Container>

    )
}

export default EntryLines