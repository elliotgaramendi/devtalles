'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useState } from 'react';

const CheckboxPage = () => {
  const [terms, setTerms] = useState(false);

  return (
    <section>
      <FieldGroup className="mx-auto w-72">
        <Field orientation="horizontal">
          <Checkbox
            id="terms-checkbox-desc"
            name="terms-checkbox-desc"
            defaultChecked
            checked={terms}
            onCheckedChange={(value: boolean) => setTerms(value)}
          />
          <FieldContent>
            <FieldLabel htmlFor="terms-checkbox-desc">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              By clicking this checkbox, you agree to the terms and conditions.
            </FieldDescription>
          </FieldContent>
        </Field>
        {terms ? (
          <Badge>Great!</Badge>
        ) : (
          <Badge variant="destructive">Warning!</Badge>
        )}
      </FieldGroup>
    </section>
  );
};

export default CheckboxPage;
