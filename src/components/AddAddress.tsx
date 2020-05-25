import React from "react";
import { Button, Modal } from "antd";

import { useBoolean } from "@umijs/hooks";
import AddressForm from "./AddressForm";
import { useIntl, connect } from "umi";
import { ConnectState, Loading } from "@/models/connect";
import { ButtonProps } from "antd/lib/button";

interface Props {
  formId: string;
  firstName?: string;
  lastName?: string;
  loading: Loading;
  onClick: () => void;
  buttonProps: ButtonProps;
}
const AddAddress: React.FC<Props> = ({
  formId,
  firstName,
  lastName,
  buttonProps,
  onClick,
  children,
  loading,
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
          loading: loading.effects["auth/createAddress"],
        }}
        onCancel={closeModal}
        title={intl.formatMessage({ id: "misc.address.createNew" })}
        visible={modalOpen}
        zIndex={1100}
      >
        <AddressForm
          id={formId}
          firstName={firstName}
          lastName={lastName}
          hideSubmit
          onSubmit={closeModal}
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

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  AddAddress,
);
