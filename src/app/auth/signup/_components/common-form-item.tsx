"use client";

import { Form, Input } from "antd";

const CommonFormItem = ({
  config,
}: {
  config: {
    errors: any;
    Controller: any;
    control: any;
    label: string;
    name: string;
    placeholder?: string;
    type?: "text" | "password";
  };
}) => {
  const { errors, Controller, control, label, name } = config;
  return (
    <Form.Item
      label={label}
      validateStatus={errors.fullname ? "error" : ""}
      help={errors.fullname?.message}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          config?.type === "password" ? (
            <Input.Password {...field} placeholder={config?.placeholder} />
          ) : (
            <Input {...field} placeholder={config?.placeholder} />
          )
        }
      />
    </Form.Item>
  );
};

export default CommonFormItem;
