import React, { useState } from "react";
import { Select, Menu, Affix, Row } from "antd";
import { useIntl } from "umi";
import AddressCard from "./AddressCard";
import AddAddress from "./AddAddress";
import { PlusOutlined } from "@ant-design/icons";
import { PROFILE_PAGE_QUERY } from "@/queries/profile";
import { profileQuery } from "@/queries/types/profileQuery";
import { useQuery } from "@apollo/client";
import { SelectProps } from "antd/lib/select";
import { AddressDetails } from "@/fragments/types/AddressDetails";

interface Props extends SelectProps<string> {
  extraAddr?: AddressDetails | null;
}
const AddressSelector: React.FC<Props> = ({ extraAddr, ...rest }) => {
  const intl = useIntl();
  const [container, setContainer] = useState(null);
  const { loading: fetching, error, data } = useQuery<profileQuery>(
    PROFILE_PAGE_QUERY,
  );
  const profileAddresses = data?.me?.addresses || [];
  const addresses = extraAddr
    ? [...profileAddresses, extraAddr]
    : profileAddresses;
  return (
    <Select
      className="full-width"
      dropdownRender={menu => (
        <div ref={setContainer}>
          {menu}
          <Menu.Divider style={{ margin: "4px 0" }} />
          <Affix offsetBottom={0} offsetTop={0} target={() => container}>
            <Row justify="center">
              <AddAddress
                formId="cart-add-addr"
                firstName={data?.me?.firstName}
                lastName={data?.me?.lastName}
              >
                <PlusOutlined />{" "}
                {intl.formatMessage({ id: "misc.address.createNew" })}
              </AddAddress>
            </Row>
          </Affix>
        </div>
      )}
      placeholder={intl.formatMessage({ id: "misc.pleaseSelect" })}
      {...rest}
    >
      {addresses.map(addr => (
        <Select.Option key={addr.id} value={addr.id}>
          <AddressCard address={addr} hideCard hideActions />
        </Select.Option>
      ))}
    </Select>
  );
};

export default AddressSelector;
