import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const dynamicFieldWithLabel = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 15, offset: 0 },
  },
};
const dynamicFieldWithoutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 6 },
    sm: { span: 15, offset: 6 },
  },
};

const DynamicFieldSet = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form.List name="ingredients">
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <Form.Item
              {...(index === 0
                ? dynamicFieldWithLabel
                : dynamicFieldWithoutLabel)}
              label={index === 0 ? "Ingredients" : ""}
              required={false}
              key={field.key}
            >
              <Form.Item
                {...field}
                validateTrigger={["onChange", "onBlur"]}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message:
                      "Please input ingredient's name or delete this field.",
                  },
                ]}
                noStyle
              >
                <Input placeholder="Ingredient name" style={{ width: "60%" }} />
              </Form.Item>

              {fields.length > 0 ? (
                <MinusCircleOutlined
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                />
              ) : null}
            </Form.Item>
          ))}
          <Row>
            <Col span={24} offset={6}>
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add ingredient
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </Col>
          </Row>
        </>
      )}
    </Form.List>
  );
};

export default DynamicFieldSet;
