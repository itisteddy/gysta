import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// social component for login
import SocialButton from './components/SocialLogin/SocialButton'

const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <div>
    <SocialButton
      provider='instagram'
      appId='YOUR_APP_ID'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Instagram
    </SocialButton>
  </div>,
  document.getElementById('root')
)

registerServiceWorker();
