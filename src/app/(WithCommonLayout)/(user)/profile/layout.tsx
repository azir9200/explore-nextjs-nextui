import { ReactNode } from "react";

import Container from "@/src/components/UI/Container";
import Sidebar from "@/src/components/sidebar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="my-3 flex w-full gap-12">
        <div className="w-2/5">
          {" "}
          <p>Side bar here</p>
          <Sidebar />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </Container>
  );
}
