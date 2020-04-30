import React from "react";
import { Typography, Row, Col, Card, List } from "antd";
import { useIntl } from "umi";
import VSpacing from "@/components/VSpacing";
import { sampleAddress } from "@/sampleData";
import AddAddress from "@/components/AddAddress";
import AddressCard from "@/components/AddressCard";

const ProfilePage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
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
              >
                <div>
                  <Typography.Text strong>
                    {intl.formatMessage({ id: "profile.name" })}
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text>Neko Meow</Typography.Text>
                </div>
              </Card>
              <VSpacing height={24} />
              <Card
                id="contact-info-card"
                title={intl.formatMessage({ id: "profile.contactInfo" })}
              >
                <div>
                  <Typography.Text strong>
                    {intl.formatMessage({ id: "profile.email" })}
                  </Typography.Text>
                </div>
                <div>
                  <Typography.Text>neko@example.com</Typography.Text>
                </div>
              </Card>
              <VSpacing height={24} />
              <Card
                id="addresses-card"
                title={intl.formatMessage({ id: "profile.addresses" })}
              >
                <List
                  dataSource={[
                    { ...sampleAddress, id: 1 },
                    { ...sampleAddress, id: 2 },
                    {},
                  ]}
                  grid={{ column: 2, xs: 1, sm: 2, gutter: 24 }}
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
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

ProfilePage.title = "profile.title";
export default ProfilePage;
