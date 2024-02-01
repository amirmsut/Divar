import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "services/admin";

// styles
import styles from "./CategoryForm.module.css";

function CategoryForm() {
    const [form, setForm] = useState({ name: "", slug: "", icon: "" });

    const { mutate, isLoading, error, data } = useMutation(addCategory);
    console.log({ isLoading, error, data });

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!form.name || !form.slug || !form.icon) return;
        mutate(form);
    };

    return (
        <form
            onChange={changeHandler}
            onSubmit={submitHandler}
            className={styles.form}
        >
            <h3>دسته بندی جدید</h3>
            {/* {!!error && <p>{error.message}</p>} */}
            {!!error && <p>مشکلی پیش آمده</p>}
            {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد.</p>}

            <label htmlFor="name">اسم دسته بندی</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="slug">اسلاگ</label>
            <input type="text" name="slug" id="slug" />
            <label htmlFor="icon">آیکون</label>
            <input type="text" name="icon" id="icon" />
            <button type="submit" disabled={isLoading}>
                ایجاد
            </button>
        </form>
    );
}

export default CategoryForm;
