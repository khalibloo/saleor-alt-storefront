import React from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import clx from "classnames";

import styles from "./AddAddress.less";
import { useBoolean } from "@umijs/hooks";
import AddressForm from "./AddressForm";
import { useIntl, connect } from "umi";
import { ConnectState, Loading } from "@/models/connect";

interface Props {
  id: string;
  firstName?: string;
  lastName?: string;
  loading: Loading;
}
const AddAddress: React.FC<Props> = ({ id, firstName, lastName, loading }) => {
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
          form: id,
          loading: loading.effects["auth/createAddress"],
        }}
        onCancel={closeModal}
        title={intl.formatMessage({ id: "misc.addAddress" })}
        visible={modalOpen}
      >
        <AddressForm
          id={id}
          firstName={firstName}
          lastName={lastName}
          hideSubmit
          onSubmit={closeModal}
        />
      </Modal>
      <Button className={clx("full-width", styles.btn)} onClick={openModal}>
        <PlusOutlined className={styles.icon} />
      </Button>
    </>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  AddAddress,
);
