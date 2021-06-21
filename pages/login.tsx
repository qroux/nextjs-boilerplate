import { Container } from '@material-ui/core';
import AnimatedPage from '../src/components/AnimatedPage';
import AuthForm from '../src/components/AuthForm';

export default function Login() {
  return (
    <AnimatedPage>
      <AuthForm />
    </AnimatedPage>
  );
}
