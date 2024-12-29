import { ReactNode } from "../../../../../node1_modules/@types/react";

import Container from "@/src/components/UI/Container";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="my-3 flex w-full gap-12">
        <div className="w-2/5" />
        <div className="w-4/5">{children}</div>
      </div>
    </Container>
  );
}
