import { Button } from "@nextui-org/button";
import Link from "next/link";

const AddBook = async () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center gap-6 my-6">
        <h3 className="ml-4">All Book</h3>
        <Link href={"/dashboard/admin-service/create-service"}>
          <Button color="warning">Create Book</Button>
        </Link>
      </div>
      <p> Add Book </p>
    </div>
  );
};

export default AddBook;
