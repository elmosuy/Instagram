import React from 'react'

const Singin = () => {
  return (
    <div className='form-con'>
<form class="form">
  <h1>Login</h1>
  <div class="group">
    <input required="true" class="main-input" type="text"/>
    <span class="highlight-span"></span>
    <label class="lebal-email">Email</label>
  </div>
  <div class="container-1">
    <div class="group">
      <input required="false" class="main-input" type="text"/>
      <span class="highlight-span"></span>
      <label class="lebal-email">password</label>
    </div>
  </div>
  <button class="submit">submit</button>

<p>هل نسيت كلمة السر؟</p>
</form>
    </div>
  )
}

export default Singin