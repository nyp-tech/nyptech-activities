import Link from "next/link";

export default function NotFound() {
  return (
    <main className={"grid place-items-center text-base-content"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center text-center"}>
          <h2 className={"card-title"}>404</h2>
          <p>The page that you are looking for does not exist!</p>
          <Link className={"btn btn-sm btn-primary"} href={"/"}>
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}