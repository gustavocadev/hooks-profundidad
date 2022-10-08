import { ChangeEvent, RefObject, useState } from 'react';

export function useForm<T>(initialForm: T) {
  const [formState, setFormState] = useState<T>(initialForm);

  const handleInputChange = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = currentTarget;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    ...formState,
    handleInputChange,
    onResetForm,
  };
}
