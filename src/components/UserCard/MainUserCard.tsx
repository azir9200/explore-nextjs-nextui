import { Avatar } from "@nextui-org/react";

import { IUser } from "@/src/types";

export default function MainUserCard({ user }: { user: IUser | null }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar
        alt="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCixyM2urliFC1w0DyNMJpBRMOXFizr3FR8aRIFfcDUGBzEaXcV6mt4gVWRqGAqqu4PI&usqp=CAU"
      />
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-poppinsRegular">{user?.name}</h4>

          {/* {user === "PREMIUM" && (
            <Chip className="bg-amber-500 text-black font-poppinsRegular text-xs">
              PRO
            </Chip>
          )} */}
        </div>
        <p className="text-primaryGray text-xs font-poppinsLight">
          {user?.email}
        </p>
      </div>
    </div>
  );
}
