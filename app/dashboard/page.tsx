import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRightFromLineIcon,
  BadgeCheckIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen items-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="flex w-full flex-col gap-4 sm:gap-6 sm:flex-row items-center sm:justify-between">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
          <div className="aspect-square w-20 rounded-full bg-muted sm:w-24 md:w-25">
            <Image
              src="https://chamith.online/_next/image?url=%2Fimages%2Fprojects%2Fcodelk-website%2Fimg3.png&w=1080&q=75"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
                Channel name
              </h1>
              <BadgeCheckIcon className="text-green-500" size={20} />
            </div>
            <p className="text-center text-xs tracking-wide text-muted-foreground sm:text-left sm:text-sm">
              Subscribers: 1.2M &nbsp; | &nbsp; Videos: 150 &nbsp; | &nbsp;
              Joined: Jan 1, 2020
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="self-center sm:self-auto"
            >
              <SettingsIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>View Channel</DropdownMenuItem>
              <DropdownMenuItem>Go to YouTube Studio</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Support</DropdownMenuLabel>
              <DropdownMenuItem>Report a problem</DropdownMenuItem>
              <DropdownMenuItem>FAQ</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>
                  <ArrowRightFromLineIcon size={14} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
