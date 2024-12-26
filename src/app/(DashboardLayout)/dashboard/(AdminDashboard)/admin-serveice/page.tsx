import { Button } from "@nextui-org/button";
import Link from "next/link";

const RecipesPage = async () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center gap-6 my-6">
        <h3 className="ml-4">All Recipes</h3>
        <Link href={"/dashboard/services/add-service"}>
          <Button color="warning">Add Recipe</Button>
        </Link>
      </div>
      <p> RecipesTable </p>
    </div>
  );
};

export default RecipesPage;
