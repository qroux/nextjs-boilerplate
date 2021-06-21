import AnimatedPage from '../src/components/AnimatedPage';
import AuthPage from '../src/components/AuthPage';
import { formTypes } from '../src/components/types/formTypes';

export default function Register() {
  return (
    <AnimatedPage>
      <AuthPage type={formTypes.REGISTER} />
    </AnimatedPage>
  );
}
