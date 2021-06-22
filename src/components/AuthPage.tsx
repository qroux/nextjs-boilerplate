import { Typography } from '@material-ui/core';
import AuthForm from './AuthForm';
import { formTypes } from './types/formTypes';

function AuthPage({ type }: { type?: formTypes }) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '95vh',
        width: '100vw'
      }}>
      <div
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1555448259-8da74c6c6b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80)',
          backgroundSize: 'cover',
          flex: 0.7,
          alignSelf: 'stretch',
          clipPath: 'polygon(0 0, 100% 0%, 95% 100%, 0% 100%)',
        }}></div>
      <AuthForm type={type} />
    </div>
  );
}

export default AuthPage;

// export default function Login() {
//   return (
//     <AnimatedPage>
//       <AuthForm />
//     </AnimatedPage>
//   );
// }
