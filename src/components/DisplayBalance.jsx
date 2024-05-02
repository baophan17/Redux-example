import React from 'react'
import { Statistic } from 'semantic-ui-react'
function DisplayBalance(props) {
    const { title, size, color, value, textAlign } = props;
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: textAlign }}>
                {title}
            </Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>

        </Statistic>
    )
}

export default DisplayBalance