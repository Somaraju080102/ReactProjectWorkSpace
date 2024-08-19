
export function LoginComponent(props){

    return(
        <div className="container-fluid w-25 border border-2 border-primary">
            <h2>Login</h2>
            <form> 
            <span className="bi bi-person-fill">{props.title_page}</span>
            <dl>
                <dt>{props.login_title}</dt>
                <dd><input type="text" ></input></dd>
                <dt>Password</dt>
                <dd><input type="password" ></input></dd>
                <button type="submit" className="btn btn-primary w-25">{props.button_text}</button>
            </dl>
            </form>
        </div>
    )
}