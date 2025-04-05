import { Input } from "@nextui-org/input";

import { SearchIcon } from "../../icons";

export default function Landing() {
  return (
    <div className="h-[calc(90vh-64px)] bg-[url('https://www.marketplace.org/wp-content/uploads/2024/06/GettyImages-1453081662.jpg?w=350')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
