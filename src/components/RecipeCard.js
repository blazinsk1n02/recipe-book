import React from "react";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const RecipeCard = ({ recipe }) => {

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <List.Item
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
      extra={
        <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      }
    >
      <List.Item.Meta
        title={recipe.recipeName}
      />
      {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora facilis quae mollitia illum nobis qui debitis nesciunt molestiae perferendis nemo!'}
    </List.Item>
  );
};

export default RecipeCard;
