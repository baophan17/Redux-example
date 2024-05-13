import React from "react";
import { Segment, Grid, Icon, Container, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.actions";
function EntryLine(props) {
  const { id, description, value, isExpense = false } = props;
  const dispatch = useDispatch();

  return (
    <Container>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={8} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3}>{"$" + value}</Grid.Column>
            <Grid.Column width={3}>
              <Button
                className="ui icon button"
                onClick={() => dispatch(openEditModal(id))}
              >
                <Icon name="edit" />
              </Button>
              <Button
                className="ui icon button"
                onClick={() => dispatch(removeEntryRedux(id))}
              >
                <Icon name="trash" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default EntryLine;
