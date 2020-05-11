import React from "react";
import { Card, Typography } from "antd";
import { useIntl } from "umi";

interface Props {
  address: any;
}
const AddressCard: React.FC<Props> = ({ address }) => {
  const intl = useIntl();
  return (
    <Card>
      <div>
        <Typography.Text>
          {address.firstName + " " + address.lastName}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.streetAddress1}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.streetAddress2}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.cityArea}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.city}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.postalCode}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.countryArea}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{address.country?.country}</Typography.Text>
      </div>
      <div>
        <Typography.Text>
          {intl.formatMessage({ id: "profile.phone" })}: {address.phone}
        </Typography.Text>
      </div>
    </Card>
  );
};

export default AddressCard;
