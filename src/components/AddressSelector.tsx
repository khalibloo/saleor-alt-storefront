import React from "react";
import { Button, Popover, Modal, List } from "antd";
import { useIntl } from "umi";
import { useBoolean } from "@umijs/hooks";
import AddressCard from "./AddressCard";
import { sampleAddress } from "@/sampleData";
import AddAddress from "./AddAddress";
import { ButtonProps } from "antd/lib/button";

interface Props extends ButtonProps {
  value?: any;
}
const AddressSelector: React.FC<Props> = ({ value, ...rest }) => {
  const intl = useIntl();
  const {
    state: modalVisible,
    setTrue: openModal,
    setFalse: closeModal,
  } = useBoolean(false);
  return (
    <>
      <Modal
        visible={modalVisible}
        onCancel={closeModal}
        destroyOnClose
        title={intl.formatMessage({ id: "cart.selectAddress" })}
      >
        <List
          dataSource={[
            { ...sampleAddress, id: 1 },
            { ...sampleAddress, id: 2 },
            {},
          ]}
          grid={{ column: 2, gutter: 24 }}
          renderItem={item => {
            if (!item.id) {
              return (
                <List.Item key="plus">
                  <AddAddress />
                </List.Item>
              );
            }
            return (
              <List.Item key={item.id}>
                <AddressCard address={item} />
              </List.Item>
            );
          }}
        />
      </Modal>
      <Popover
        content={value && <AddressCard address={value} />}
        popupVisible={value != null}
      >
        <Button onClick={openModal} {...rest}>
          {value
            ? `${value.firstName} ${value.lastName}`
            : intl.formatMessage({ id: "misc.pleaseSelect" })}
        </Button>
      </Popover>
    </>
  );
};

export default AddressSelector;
