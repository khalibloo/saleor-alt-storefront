import React, { useState } from "react";
import { Select, Menu, Affix, Row } from "antd";
import { useIntl } from "umi";
import AddressCard from "./AddressCard";
import AddOrEditAddress from "./AddOrEditAddress";
import { PlusOutlined } from "@ant-design/icons";
import { PROFILE_PAGE_QUERY } from "@/queries/profile";
import { profileQuery } from "@/queries/types/profileQuery";
import { useQuery } from "@apollo/client";
import { SelectProps } from "antd/lib/select";
import { AddressDetails } from "@/fragments/types/AddressDetails";
import { AddressInput } from "@/globalTypes";

interface Props extends SelectProps<string> {
  editMode?: boolean;
  extraAddr?: AddressDetails;
  onAddOrEdit?: (address: AddressInput) => void;
}
const AddressSelector: React.FC<Props> = ({
  extraAddr,
  editMode,
  loading,
  onAddOrEdit,
  ...rest
}) => {
  const intl = useIntl();
  const [container, setContainer] = useState(null);
  const { loading: fetching, error, data } = useQuery<profileQuery>(
    PROFILE_PAGE_QUERY,
  );
  const profileAddresses: AddressDetails[] =
    (data?.me?.addresses as AddressDetails[]) || [];
  const addresses = extraAddr
    ? [...profileAddresses, extraAddr]
    : profileAddresses;

  if (addresses.length === 0) {
    // if no address, show only the create address button
    return (
      <AddOrEditAddress
        formId="cart-add-addr"
        firstName={data?.me?.firstName}
        lastName={data?.me?.lastName}
        isLoading={loading}
        onAddOrEdit={onAddOrEdit}
      >
        <PlusOutlined />{" "}
        {intl.formatMessage({
          id: "misc.address.createNew",
        })}
      </AddOrEditAddress>
    );
  }
  return (
    <Select
      className="full-width"
      dropdownRender={menu => (
        <div ref={setContainer}>
          {menu}
          <Menu.Divider style={{ margin: "4px 0" }} />
          <Affix offsetBottom={0} offsetTop={0} target={() => container}>
            <Row justify="center">
              <AddOrEditAddress
                address={
                  editMode && addresses.length === 1 ? addresses[0] : undefined
                }
                formId="cart-add-addr"
                firstName={data?.me?.firstName}
                lastName={data?.me?.lastName}
                isLoading={loading}
              >
                <PlusOutlined />{" "}
                {intl.formatMessage({
                  id: editMode ? "misc.address.edit" : "misc.address.createNew",
                })}
              </AddOrEditAddress>
            </Row>
          </Affix>
        </div>
      )}
      loading={loading}
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
