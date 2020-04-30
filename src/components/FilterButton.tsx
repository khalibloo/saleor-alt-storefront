import * as React from "react";
import { Button, Drawer } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useIntl } from "umi";
import { useBoolean, useResponsive } from "@umijs/hooks";
import { ButtonProps } from "antd/lib/button";

interface Props extends ButtonProps {}
const FilterButton: React.FC<Props> = props => {
  const intl = useIntl();
  const responsive = useResponsive();
  const {
    state: filterDrawerOpen,
    setTrue: openFilterDrawer,
    setFalse: closeFilterDrawer,
  } = useBoolean();
  return (
    <>
      <Drawer
        title={intl.formatMessage({ id: "search.filters" })}
        visible={filterDrawerOpen}
        onClose={closeFilterDrawer}
        placement="left"
        width={responsive.md ? "40%" : "60%"}
      >
        {intl.formatMessage({ id: "search.filters" })}...
      </Drawer>
      <Button onClick={openFilterDrawer} {...props}>
        <FilterOutlined /> {intl.formatMessage({ id: "search.filters" })}
      </Button>
    </>
  );
};

export default FilterButton;
