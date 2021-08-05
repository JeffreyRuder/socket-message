import {Button, Form, Input} from 'antd';
import {useState} from 'react';

interface EditorProps {
  onSubmit: (value: string) => void;
  submitting: boolean;
}

export const Editor = (props: EditorProps) => {
  const {onSubmit, submitting} = props;
  const [value, setValue] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <Form.Item>
        <Input.TextArea
          maxLength={255}
          rows={4}
          onChange={onChange}
          value={value}
        />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={value === ''}
          htmlType="submit"
          loading={submitting}
          onClick={() => onSubmit(value)}
          type="primary"
        >
          Add Message
        </Button>
      </Form.Item>
    </>
  );
};
