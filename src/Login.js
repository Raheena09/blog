import React from "react";


function Login(props) {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
      <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
     <div className="btnContainer" >
         {hasAccount? (
           <>
            <button onClick={handleLogin} style={{backgroundColor:"#080707"}}>Sign in</button>
            {/* when clicked in signup (span tag), state changes to opposite (if false, changes into true and vice versa) */}
            <p>Don't have an account? <span onClick ={()=> setHasAccount(!hasAccount)} >Sign up</span></p>
           </>  
         ):(
            <>
            <button onClick={handleSignup} style={{backgroundColor:"#080707"}}>Sign up</button>
            {/* when clicked in signin(span tag), state changes to opposite (if false, changes into true and vice versa) */}

            <p>Have an account ? <span onClick ={()=> setHasAccount(!hasAccount)} >Sign in</span></p>
           </>  
         )}
     </div>
      </div>
    </section>
  );
}

export default Login;
