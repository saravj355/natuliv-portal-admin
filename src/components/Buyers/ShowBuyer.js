import * as React from 'react';
import { Show, Tab, TabbedShowLayout, TextField } from 'react-admin';

const BuyerTitle = ({ record }) =>
    record ? <span>{record.identityUser.fullName}</span> : null;

const ShowBuyer = (props) => {
    return (
        <Show {...props} title={<BuyerTitle />}>
            <TabbedShowLayout>
                <Tab label="Información usuario">
                    <TextField source="identityUser.fullName" />
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default ShowBuyer;
