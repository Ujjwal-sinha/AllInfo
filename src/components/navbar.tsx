import { Maxwidthwrapper } from "./maxwidthwrapper"
import Link from "next/link"
import{SignOutButton} from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, Flag } from "lucide-react";
export const Navbar=()=>{
    const user = false;

    return(
        <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
            <Maxwidthwrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex z-40 font-semibold">
                    All<span className="text-brand-700">Info</span>
                    </Link>
                    <div className="">
                        {
                            user ? <>
                            <SignOutButton>
                                <Button size="sm" variant="ghost">
                                    Sign out
                                </Button>
                            </SignOutButton>
                            <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 size-4" />
                </Link>

                            </>:(
                                <>
                                 <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign in
                </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </Maxwidthwrapper>
        </nav>
    )
}