import React from 'react';
import {Card, CardBody, CardHeader, CardSubtitle, CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Search } from '@material-ui/icons';

const HeaderCard = () => {
  return (
    <Card className="shadow border-0">
      <CardHeader>
        <div>
          <Input
            placeholder="Placeholder"
            inputProps={{
              'aria-label': 'Description',
            }}
            className="col-md-9 col-12"
          />
          <Search/>
        </div>
      </CardHeader>
      <CardBody>
      </CardBody>
    </Card>
  );
};
export default HeaderCard;