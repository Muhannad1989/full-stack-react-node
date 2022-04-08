import { Avatar, List, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";

// constants
const actions = [
  <a key="list-loadmore-edit">edit</a>,
  <a key="list-loadmore-more">more</a>
];

const ListItem = ({ item: { id, firstname, lastname }, loading }) => (
  <List.Item actions={actions}>
    <Skeleton avatar title={false} loading={loading} active>
      <List.Item.Meta
        avatar={
          <OgelAvatar
            link={"https://iconape.com/wp-content/png_logo_vector/avatar-4.png"}
          />
        }
        title={<Link to={`/user/${id}`}>{`${firstname} , ${lastname}`}</Link>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </Skeleton>
  </List.Item>
);

export default ListItem;

const OgelAvatar = ({ link }) => <Avatar src={link} />;
