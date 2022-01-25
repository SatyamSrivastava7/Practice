export function LoginPage(){
    return(
        <form>
            <label for='email'>Email Address</label>
            <input type='text' placeholder="Enter your email" id='email' name="email"/>
            <label for='password'>Password</label>
            <input type='text' id="pass" name="pass"/>
            <input type='submit' value='Submit'/>
        </form>
    )
}