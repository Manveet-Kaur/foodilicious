import { Button, Form, Input } from "antd";

import "./Login.css";
import SunAndMoon from "../../assets/day-and-night.png";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={SunAndMoon} alt="Sun and Moon" />
      </div>
      <div className="form-container">
        <Form
          name="login"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Who are you?!!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Prove that you are You!!",
              },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Please, Let me in!
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
