"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from 'react';

const ProgressPage = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(96), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section>
      <Field className="w-full max-w-sm">
        <FieldLabel htmlFor="progress-upload">
          <span>Upload progress</span>
          <span className="ml-auto">{progress}%</span>
        </FieldLabel>
        <Progress value={progress} id="progress-upload" />
      </Field>
    </section>
  );
};

export default ProgressPage;
