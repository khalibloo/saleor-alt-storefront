import React, { useState, useRef } from "react";
import { Select, Menu, Affix, Row } from "antd";
import { useIntl } from "umi";
import AddressCard from "./AddressCard";
import AddAddress from "./AddAddress";
import { ButtonProps } from "antd/lib/button";
import { PlusOutlined } from "@ant-design/icons";
import { PROFILE_PAGE_QUERY } from "@/queries/profile";
import { profileQuery } from "@/queries/types/profileQuery";
import { useQuery } from "@apollo/react-hooks";

interface Props extends ButtonProps {
  value?: any;
}
const AddressSelector: React.FC<Props> = ({ value, ...rest }) => {
  const intl = useIntl();
  const ref = useRef<Select>(null);
  const [container, setContainer] = useState(null);
  const { loading: fetching, error, data } = useQuery<profileQuery>(
    PROFILE_PAGE_QUERY,
  );
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
      ref={ref}
    >
      {data?.me?.addresses?.map(addr => (
        <Select.Option key={addr.id} value={addr.id}>
          <AddressCard address={addr} hideCard />
        </Select.Option>
      ))}
    </Select>
  );
};

export default AddressSelector;
