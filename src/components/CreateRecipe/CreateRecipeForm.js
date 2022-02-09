import { Form, Input, Button, Row, Col } from "antd";

import DynamicFieldSet from "./DynamicFieldSet";

import { useDispatch } from "react-redux";
import { addRecipe } from "../../store/recipeSlice";

const formFieldsLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};

const CreateRecipeForm = () => {
  const dispatch = useDispatch()
  const { TextArea } = Input;

  const handleSubmit = (recipe) => {
    dispatch(addRecipe(recipe))
    console.log("Received values of form:", recipe);
  };

  return (
    <Form name="createRecipe" onFinish={handleSubmit} {...formFieldsLayout}>
      <Form.Item label={<strong>Recipe name</strong>} name="recipeName">
        <Input />
      </Form.Item>
      <Form.Item label={<strong>Preparation Time</strong>} name="prepTime">
        <Input />
      </Form.Item>
      <Form.Item label={<strong>Cook Time</strong>} name="cookTime">
        <Input />
      </Form.Item>

      <DynamicFieldSet />

      <Form.Item label={<strong>Directions</strong>} name="directions">
        <TextArea
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>

      <Row>
        <Col span={24} offset={6}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateRecipeForm;
