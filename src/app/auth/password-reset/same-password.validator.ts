import { FormGroup } from '@angular/forms';

export function samePasswordValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value ?? '';
  const confirmedPassword = formGroup.get('confirmedPassword')?.value ?? '';

  if (password.trim() + confirmedPassword.trim()) {
    return password !== confirmedPassword ? { samePassword: true } : null;
  } else {
    return null;
  }
}
