import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './DynamicForm.module.css';
const DynamicForm = () => {
    const { handleSubmit, control, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const firstFieldValue = watch('firstField');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="firstField">Первое поле</label>
                <Controller
                    name="firstField"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} id="firstField" />}
                />
            </div>

            {firstFieldValue && (
                <div className={styles.formGroup}>
                    <label htmlFor="secondField">Второе поле</label>
                    <Controller
                        name="secondField"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} id="secondField" />}
                    />
                </div>
            )}

            <button type="submit" className={styles.submitButton}>Отправить</button>
        </form>
    );
};

export default DynamicForm;