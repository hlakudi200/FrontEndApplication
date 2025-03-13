
'use client'
import { Button, Checkbox, Form, Input, InputNumber, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { IPlan } from '@/providers/mealsprovider/context';

const MealPlanForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values:IPlan ) => {
    console.log('Received values:', values);
  
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" style={{paddingLeft:10,paddingRight:10}}>
    
      <Form.Item
        name="name"
        label="Plan Name"
        rules={[{ required: true }]}
      >
        <Input placeholder="e.g., Summer Weight Loss Plan" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Plan Description"
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        name="notes"
        label="Trainer Notes"
      >
        <Input.TextArea rows={3} />
      </Form.Item>

 
      <Form.List name="meals">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} style={{ border: '1px solid #d9d9d9', padding: 16, marginBottom: 16 }}>
                <Space align="baseline">
                  <h3>Meal {name + 1}</h3>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>

                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  label="Meal Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'note']}
                  label="Meal Notes"
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.List name={[name, 'items']}>
                  {(itemFields, { add: addItem, remove: removeItem }) => (
                    <>
                      {itemFields.map((itemField) => (
                        <div key={itemField.key} style={{ marginLeft: 16 }}>
                          <Space align="baseline">
                            <h4>Item {itemField.name + 1}</h4>
                            <MinusCircleOutlined onClick={() => removeItem(itemField.name)} />
                          </Space>

                          <Form.Item
                            {...itemField}
                            name={[itemField.name, 'name']}
                            label="Item Name"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>

                          <Space>
                            <Form.Item
                              {...itemField}
                              name={[itemField.name, 'quantity']}
                              label="Quantity"
                            >
                              <InputNumber min={0} />
                            </Form.Item>

                            <Form.Item
                              {...itemField}
                              name={[itemField.name, 'unit']}
                              label="Unit"
                            >
                              <Input />
                            </Form.Item>
                          </Space>

                          <Space>
                            <Form.Item
                              {...itemField}
                              name={[itemField.name, 'calories']}
                              label="Calories"
                            >
                              <InputNumber min={0} />
                            </Form.Item>

                            <Form.Item
                              {...itemField}
                              name={[itemField.name, 'carbs']}
                              label="Carbs (g)"
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item
                              {...itemField}
                              name={[itemField.name, 'protein']}
                              label="Protein (g)"
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item
                              {...itemField}
                              name={[itemField.name, 'fat']}
                              label="Fat (g)"
                            >
                              <Input />
                            </Form.Item>
                          </Space>
                        </div>
                      ))}
                      <Button type="dashed" onClick={() => addItem()} block icon={<PlusOutlined />}>
                        Add Food Item
                      </Button>
                    </>
                  )}
                </Form.List>
              </div>
            ))}
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Meal
            </Button>
          </>
        )}
      </Form.List>

      <Form.Item
        name="base"
        valuePropName="checked"
        style={{ marginTop: 16 }}
      >
        <Checkbox>Set as Base Plan</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Meal Plan
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MealPlanForm;