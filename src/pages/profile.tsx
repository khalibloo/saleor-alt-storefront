import React from "react";
import { Typography, Row, Col, Card, List, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useIntl } from "umi";
import VSpacing from "@/components/VSpacing";
import { sampleAddress } from "@/sampleData";

const ProfilePage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "profile.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={12}>
              <Card title={intl.formatMessage({ id: "profile.personalInfo" })}>
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
              <Card title={intl.formatMessage({ id: "profile.contactInfo" })}>
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
              <Card title={intl.formatMessage({ id: "profile.addresses" })}>
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
                          <Button
                            className="full-width"
                            style={{ height: 120 }}
                          >
                            <PlusOutlined style={{ fontSize: 36 }} />
                          </Button>
                        </List.Item>
                      );
                    }
                    return (
                      <List.Item key={item.id}>
                        <Card>
                          <div>
                            <Typography.Text>{item.phone}</Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>
                              {item.firstName + " " + item.lastName}
                            </Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>
                              {item.streetAddress1}
                            </Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>
                              {item.streetAddress2}
                            </Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>{item.cityArea}</Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>{item.city}</Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>{item.postalCode}</Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>
                              {item.countryArea}
                            </Typography.Text>
                          </div>
                          <div>
                            <Typography.Text>{item.country}</Typography.Text>
                          </div>
                        </Card>
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
