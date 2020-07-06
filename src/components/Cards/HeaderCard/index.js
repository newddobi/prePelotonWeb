import React from 'react';
import {Card, CardBody, CardHeader, CardSubtitle, CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Search } from '@material-ui/icons';

const HeaderCard = () => {
  return (
    <Card className="shadow border-0">
      <CardHeader>
        <span>
          <Input
            placeholder="주소를 입력해주세요"
            inputProps={{
              'aria-label': 'address',
            }}
            className="col-md-9 col-12"
          />
        </span>
        <span style={{ marginLeft:'10px' }}>
          <Search/>
        </span>
      </CardHeader>
      <CardBody>
      </CardBody>
    </Card>
  );
};
export default HeaderCard;