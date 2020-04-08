import React, { Component } from 'react';

import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {

        return (
            <Card>
                <CardSection>
                    <Input
                        lable='Name'
                        placeholder='Jane'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        lable='Phone'
                        placeholder='555-555-55'
                    />
                </CardSection>

                <CardSection></CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;