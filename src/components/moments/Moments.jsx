import { useState } from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

import "./Moments.css";
import { Button, Modal, Form, Input, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

// import { db } from "../../firebase";

const props = {
  name: "file",
  multiple: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Moments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("values", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const addMoment = async () => {
    setIsModalOpen(true);

    // try {
    //   const docRef = await addDoc(collection(db, "stories"), {
    //     image: "test_image",
    //     caption: "test-caption",
    //     timestamp: serverTimestamp(),
    //   });
    //   console.log(docRef);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="moments-container">
      <Modal
        title="Moment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={""}
      >
        <div className="moment-form-container">
          <Form
            name="moment"
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
              name="caption"
              rules={[
                {
                  required: true,
                  message: "Please enter caption 🥺!!",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                maxLength={6}
                placeholder="Describe the moment ♥️"
              />
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
              <Upload.Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Give me moments 🤩!!</p>
              </Upload.Dragger>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Button onClick={addMoment}>Add Moment</Button>
    </div>
  );
};

export default Moments;
