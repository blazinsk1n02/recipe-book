import { List, Avatar, Space } from "antd";

import { useSelector } from "react-redux";

import RecipeCard from "./RecipeCard";

const RecipesList = () => {
  const recipes = useSelector((state) => state.recipes.items);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={recipes}
      renderItem={(recipe) => <RecipeCard recipe={recipe} />}
    />
  );
};

export default RecipesList;
