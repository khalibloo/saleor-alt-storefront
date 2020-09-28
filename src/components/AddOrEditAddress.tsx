import React from "react";
import { Button, Modal } from "antd";

import { useBoolean } from "@umijs/hooks";
import AddressForm from "./AddressForm";
import { useIntl, connect } from "umi";
import { ButtonProps } from "antd/lib/button";
import { AddressInput } from "@/globalTypes";
import { AddressDetails } from "@/fragments/types/AddressDetails";

interface Props {
  formId: string;
  address?: AddressDetails;
  firstName?: string;
  lastName?: string;
  isLoading?: boolean;
  onClick: () => void;
  onAddOrEdit?: (address: AddressInput) => void;
  buttonProps: ButtonProps;
}
const AddOrEditAddress: React.FC<Props> = ({
  formId,
  address,
  firstName,
  lastName,
  buttonProps,
  onAddOrEdit,
  onClick,
  children,
  isLoading,
}) => {
  const intl = useIntl();
  const {
    state: modalOpen,
    setTrue: openModal,
    setFalse: closeModal,
  } = useBoolean(false);
  return (
    <>
      <Modal
        destroyOnClose
        okText={intl.formatMessage({ id: "misc.save" })}
        okButtonProps={{
          htmlType: "submit",
          form: formId,
          loading: isLoading,
        }}
        onCancel={closeModal}
        title={intl.formatMessage({ id: "misc.address.createNew" })}
        visible={modalOpen}
      >
        <AddressForm
          id={formId}
          address={address}
          firstName={firstName}
          lastName={lastName}
          hideSubmit
          onSubmit={(addr: AddressInput) => {
            closeModal();
            onAddOrEdit?.(addr);
          }}
        />
      </Modal>
      <Button
        {...buttonProps}
        onClick={() => {
          openModal();
          onClick?.();
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default connect()(AddOrEditAddress);
