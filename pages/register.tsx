import AnimatedPage from '../src/components/AnimatedPage';
import AuthForm from '../src/components/AuthForm';
import { formTypes } from '../src/components/types/formTypes';

export default function Register() {
  return (
    <AnimatedPage>
      <AuthForm type={formTypes.REGISTER} />
    </AnimatedPage>
  );
}
