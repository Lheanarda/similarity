import UserAuthForm from "@/components/UserAuthForm";
import { buttonVariants } from "@/components/atoms/Button";
import LargeHeading from "@/components/atoms/LargeHeading";
import Paragraph from "@/components/atoms/Paragraph";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="absolute insert-0 mx-auto container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit",
            })}
            href={"/"}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <LargeHeading>Welcome back!</LargeHeading>
          <Paragraph>Please sign in using your google account.</Paragraph>

          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};
export default page;
