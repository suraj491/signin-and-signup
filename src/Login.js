import React from 'react'
const Login=(props)=>{
    const {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}=props
    return(
      <div className="form-control form-width justify-content-center">
        <div className="loginContainer">
           <label>Email</label>
           <input
             type="text"
             autoFocus
             required
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
           />
           <p className="errorMsg">{emailError}</p>
           <label>Password</label>
           <input
             type="password"
             required
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
           />
           <p className="errorMsg">{passwordError}</p>
           <div className="btnContainer">
            {hasAccount ? (
                <>
                    <button className="btn btn-dark" onClick={handleLogin}>Sign in</button>
                    <p>
                        Don't have an account?
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span>
                    </p>
                </>
               ):(
                   <>
                     <button className="btn btn-dark" onClick={handleSignup}>Sign up</button>
                     <p>
                         Have an account ?
                         <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span>
                     </p>
                   </>
               )}
           </div>
        </div>
      </div>
    )
}
export default Login