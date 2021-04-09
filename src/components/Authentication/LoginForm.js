import { TextField } from '@material-ui/core';
import { PasswordInput } from 'ra-ui-materialui';
import React from 'react';

function LoginForm () {
    return (
        <form>
            <TextField
                id="filled-secondary"
                label="Filled secondary"
                variant="filled"
                placeholder="Correo Electrónico"
                color="secondary"
            />
            <PasswordInput
                id="filled-secondary"
                label="Filled secondary"
                variant="filled"
                placeholder="Contraseña"
                color="secondary"
            />
        </form>
    );
}

export default LoginForm;
