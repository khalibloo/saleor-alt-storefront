import React from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  List,
  Skeleton,
  Button,
  Modal,
} from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useIntl, connect } from "umi";
import VSpacing from "@/components/VSpacing";
import AddAddress from "@/components/AddAddress";
import AddressCard from "@/components/AddressCard";
import { useQuery } from "@apollo/react-hooks";
import { profileQuery } from "@/queries/types/profileQuery";
import { PROFILE_PAGE_QUERY } from "@/queries/profile";
import EditNameForm from "@/components/EditNameForm";
import { useBoolean } from "@umijs/hooks";
import { ConnectState, Loading } from "@/models/connect";

interface Props {
  loading: Loading;
}
const ProfilePage: React.FC<Props> = ({ loading }) => {
  const intl = useIntl();
  const {
    state: editNameModalOpen,
    setTrue: openEditNameModal,
    setFalse: closeEditNameModal,
  } = useBoolean(false);
  const { loading: fetching, error, data } = useQuery<profileQuery>(
    PROFILE_PAGE_QUERY,
  );
  return (
    <div>
      <VSpacing height={24} />
      <Modal
        destroyOnClose
        okText={intl.formatMessage({ id: "misc.saveChanges" })}
        okButtonProps={{
          form: "editname-form",
          htmlType: "submit",
          loading: loading.effects["auth/updateName"],
        }}
        onCancel={closeEditNameModal}
        title={intl.formatMessage({ id: "profile.editName" })}
        visible={editNameModalOpen}
      >
        <EditNameForm
          id="editname-form"
          firstName={data?.me?.firstName || ""}
          lastName={data?.me?.lastName || ""}
          hideSubmit
          onSubmit={closeEditNameModal}
        />
      </Modal>
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "profile.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col
              id="content-col"
              span={12}
              xs={24}
              sm={24}
              md={16}
              lg={12}
              xl={12}
              xxl={8}
            >
              <Card
                id="personal-info-card"
                title={intl.formatMessage({ id: "profile.personalInfo" })}
                extra={
                  <Button onClick={openEditNameModal}>
                    <EditOutlined /> {intl.formatMessage({ id: "misc.edit" })}
                  </Button>
                }
              >
                <Skeleton
                  active
                  avatar={false}
                  title={{ width: "30%" }}
                  paragraph={{ rows: 1 }}
                  loading={fetching}
                >
                  <div>
                    <Typography.Text strong>
                      {intl.formatMessage({ id: "profile.name" })}
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text>
                      {data?.me?.firstName} {data?.me?.lastName}
                    </Typography.Text>
                  </div>
                </Skeleton>
              </Card>
              <VSpacing height={24} />
              <Card
                id="addresses-card"
                title={intl.formatMessage({ id: "profile.addresses" })}
              >
                <List
                  dataSource={[...(data?.me?.addresses || []), {}]}
                  grid={{ column: 2, xs: 1, sm: 2, gutter: 24 }}
                  renderItem={item => {
                    if (!item.id) {
                      return (
                        <List.Item key="plus">
                          <AddAddress
                            formId="profile-add-addr"
                            firstName={data?.me?.firstName}
                            lastName={data?.me?.lastName}
                            buttonProps={{
                              block: true,
                              style: { height: 120 },
                            }}
                          >
                            <PlusOutlined style={{ fontSize: 36 }} />
                          </AddAddress>
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
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

const ConnectedPage = connect((state: ConnectState) => ({
  loading: state.loading,
}))(ProfilePage);

ConnectedPage.title = "profile.title";
export default ConnectedPage;
