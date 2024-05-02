import React from 'react'
import { Form, Segment, Checkbox } from 'semantic-ui-react'
function EntryForm(props) {
    const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense
    } = props;
    return (
        <>
            <Form.Group widths={3}>
                <Form.Input
                    icon='tags'
                    width={12}
                    label="Description "
                    placeholder='New shinny thing'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    width={4}
                    label='Value '
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label='is expense'
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </>
    )
}

export default EntryForm