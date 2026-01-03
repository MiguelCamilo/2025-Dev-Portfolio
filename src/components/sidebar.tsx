import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="hidden pointer-events-none fixed inset-y-0 right-0 z-30 my-auto mr-4 md:flex origin-right w-full max-w-14 max-h-fit">
        <div className="fixed right-0 inset-y-0 w-16 h-1/2 my-auto bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_left,black,transparent)] dark:bg-background"></div>
        <Dock className="z-50 pointer-events-auto relative my-auto flex flex-col justify-center min-w-full w-full h-full items-center py-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          {DATA.sidebar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </div>
    )    
}
