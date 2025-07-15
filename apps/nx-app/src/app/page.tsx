'use client';

import { Button } from '@nx-app/ui';
import { increment } from '@nx-app/utils';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Заголовок</h1>
      <p className="mt-4">
        Это простой пример приложения Next.js с Tailwind CSS + ShadCN
      </p>
      <Button
        onClick={() => {
          console.log(increment(1));
        }}
        className="mt-8"
      >
        Get Started
      </Button>
    </div>
  );
}
