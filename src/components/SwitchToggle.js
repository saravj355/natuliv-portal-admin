/* eslint-disable react/prop-types */
import { FormControlLabel, Switch } from '@material-ui/core';
import React, { useState } from 'react';

const SwitchToggle = (props) => {
    const [checked, setToggleChecked] = useState(props.record.isActive);

    const handleToggleChecked = () => {
        setToggleChecked((checked) => !checked);
    };

    return (
        <FormControlLabel
            control={
                <Switch checked={checked} onChange={handleToggleChecked} />
            }
            label={props.label}
            labelPlacement="start"
        />
    );
};

export default SwitchToggle;
