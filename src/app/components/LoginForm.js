import styles from "src/app/components/components.module.css";

const LoginForm = () => {
    return (
        <div>
            <h2>Login Form</h2>
            <form className={styles.Form} onSumbit={(e) => loginUser(e)}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="pass">Password</label>
                <input type="pwassword" name="pass"/>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;