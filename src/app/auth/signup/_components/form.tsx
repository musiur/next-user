"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, Modal } from "antd";

import { SignupFormData, SignupSchema } from "./type";
import CommonFormItem from "./common-form-item";

const SignupForm: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState<SignupFormData | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    setFormData(data);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const formConfig = { errors, Controller, control };

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <CommonFormItem
          config={{
            ...formConfig,
            label: "Fullname",
            name: "fullname",
            placeholder: "Enter your fullname",
          }}
        />
        <CommonFormItem
          config={{
            ...formConfig,
            label: "Email",
            name: "email",
            placeholder: "Enter your email",
          }}
        />

        <CommonFormItem
          config={{
            ...formConfig,
            label: "Zip Code",
            name: "zipCode",
            placeholder: "Enter your zip code",
          }}
        />
        <CommonFormItem
          config={{
            ...formConfig,
            label: "Password",
            name: "password",
            placeholder: "Enter your password",
            type: "password",
          }}
        />
        <CommonFormItem
          config={{
            ...formConfig,
            label: "Confirm Password",
            name: "confirmPassword",
            placeholder: "Enter your password again",
            type: "password",
          }}
        />

        {/* <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Enter your password" />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={errors.confirmPassword?.message}
        >
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Confirm your password" />
            )}
          />
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Form Submission"
        open={isModalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <p>
          <strong>Fullname:</strong> {formData?.fullname}
        </p>
        <p>
          <strong>Email:</strong> {formData?.email}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData?.zipCode}
        </p>
        <p>
          <strong>Password:</strong> {formData?.password}
        </p>
      </Modal>
    </>
  );
};

export default SignupForm;
