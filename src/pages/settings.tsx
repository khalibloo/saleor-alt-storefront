import React from "react";
import { Typography, Row, Col, Card, Button, Skeleton, Modal } from "antd";
import { useIntl, Loading, connect } from "umi";
import VSpacing from "@/components/VSpacing";
import { useBoolean } from "@umijs/hooks";
import { useQuery } from "@apollo/react-hooks";
import { profileQuery } from "@/queries/types/profileQuery";
import { PROFILE_PAGE_QUERY } from "@/queries/profile";
import ChangeEmailForm from "@/components/ChangeEmailForm";
import { ConnectState } from "@/models/connect";
import ChangePasswordForm from "@/components/ChangePasswordForm";

interface Props {
  loading: Loading;
}
const SettingsPage = ({ loading }) => {
  const intl = useIntl();
  const {
    state: changeEmailModalOpen,
    setTrue: openChangeEmailModal,
    setFalse: closeChangeEmailModal,
  } = useBoolean(false);
  const {
    state: changePwdModalOpen,
    setTrue: openChangePwdModal,
    setFalse: closeChangePwdModal,
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
          form: "change-email-form",
          htmlType: "submit",
          loading: loading.effects["auth/changeEmail"],
        }}
        onCancel={closeChangeEmailModal}
        title={intl.formatMessage({ id: "settings.changeEmail" })}
        visible={changeEmailModalOpen}
      >
        <ChangeEmailForm
          id="change-email-form"
          email={data?.me?.email || ""}
          hideSubmit
          onSubmit={closeChangeEmailModal}
        />
      </Modal>
      <Modal
        destroyOnClose
        okText={intl.formatMessage({ id: "misc.saveChanges" })}
        okButtonProps={{
          form: "change-pwd-form",
          htmlType: "submit",
          loading: loading.effects["auth/changePassword"],
        }}
        onCancel={closeChangePwdModal}
        title={intl.formatMessage({ id: "settings.changePwd" })}
        visible={changePwdModalOpen}
      >
        <ChangePasswordForm
          id="change-pwd-form"
          hideSubmit
          onSubmit={closeChangePwdModal}
        />
      </Modal>
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "settings.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={12} xs={24} sm={24} md={16} lg={12} xl={12} xxl={8}>
              <Card
                id="security-card"
                title={intl.formatMessage({ id: "settings.security" })}
              >
                <Skeleton
                  active
                  avatar={false}
                  title={{ width: "30%" }}
                  paragraph={{ rows: 4, width: ["30%", "50%", "30%", "30%"] }}
                  loading={fetching}
                >
                  <div>
                    <Typography.Text strong>
                      {intl.formatMessage({ id: "settings.email" })}
                    </Typography.Text>
                  </div>
                  <Row gutter={24} align="middle">
                    <Col>
                      <Typography.Text>
                        {data?.me?.email.toLowerCase()}
                      </Typography.Text>
                    </Col>
                    <Col>
                      <Button
                        id="change-email-btn"
                        onClick={openChangeEmailModal}
                      >
                        {intl.formatMessage({ id: "settings.changeEmail" })}
                      </Button>
                    </Col>
                  </Row>
                  <VSpacing height={8} />
                  <div>
                    <Typography.Text id="pwd-text" strong>
                      {intl.formatMessage({ id: "settings.pwd" })}
                    </Typography.Text>
                  </div>
                  <VSpacing height={8} />
                  <div>
                    <Button id="change-pwd-btn" onClick={openChangePwdModal}>
                      {intl.formatMessage({ id: "settings.changePwd" })}
                    </Button>
                  </div>
                </Skeleton>
              </Card>
              <VSpacing height={24} />
              <Card
                id="danger-zone-card"
                title={intl.formatMessage({ id: "settings.dangerZone" })}
              >
                <div>
                  <Button id="shutdown-account-btn" type="danger">
                    {intl.formatMessage({ id: "settings.shutdownAccount" })}
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

SettingsPage.title = "settings.title";
export default connect((state: ConnectState) => ({ loading: state.loading }))(
  SettingsPage,
);
