import React from "react";
import { Card, Typography, Button, Modal, notification } from "antd";
import { useIntl, connect, ConnectRC } from "umi";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useBoolean } from "@umijs/hooks";
import { Loading, ConnectState } from "@/models/connect";
import AddressForm from "./AddressForm";

interface Props {
  address: any;
  loading: Loading;
}
const AddressCard: ConnectRC<Props> = ({ address, loading, dispatch }) => {
  const intl = useIntl();
  const {
    state: editAddrModalOpen,
    setTrue: openEditAddrModal,
    setFalse: closeEditAddrModal,
  } = useBoolean(false);

  return (
    <>
      <Modal
        destroyOnClose
        okText={intl.formatMessage({ id: "misc.saveChanges" })}
        okButtonProps={{
          form: "edit-addr-form-" + address.id,
          htmlType: "submit",
          loading: loading.effects["auth/updateAddress"],
        }}
        onCancel={closeEditAddrModal}
        title={intl.formatMessage({ id: "profile.editAddress" })}
        visible={editAddrModalOpen}
      >
        <AddressForm
          id={"edit-addr-form-" + address.id}
          address={address}
          hideSubmit
          onSubmit={closeEditAddrModal}
        />
      </Modal>
      <Card
        actions={[
          <Button
            block
            className="icon-btn"
            key="edit"
            onClick={openEditAddrModal}
          >
            <EditOutlined /> {intl.formatMessage({ id: "misc.edit" })}
          </Button>,
          <Button
            block
            className="icon-btn"
            key="delete"
            onClick={() =>
              Modal.confirm({
                title: intl.formatMessage({
                  id: "profile.address.delete.confirm",
                }),
                icon: <ExclamationCircleOutlined />,
                maskClosable: true,
                okText: intl.formatMessage({
                  id: "misc.delete",
                }),
                onOk: () => {
                  return new Promise((resolve, reject) => {
                    dispatch({
                      type: "auth/deleteAddress",
                      payload: {
                        id: address.id,
                        onCompleted: () => {
                          notification.success({
                            message: intl.formatMessage({
                              id: "misc.save.success",
                            }),
                          });
                          resolve();
                        },
                        onError: err => reject(err),
                      },
                    }).catch(err => console.log("Failed to delete address"));
                  });
                },
                okButtonProps: {
                  loading: loading.effects["auth/deleteAddress"],
                },
                okType: "danger",
              })
            }
          >
            <DeleteOutlined /> {intl.formatMessage({ id: "misc.delete" })}
          </Button>,
        ]}
      >
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
    </>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  AddressCard,
);
