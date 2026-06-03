"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ArrowRightFromLineIcon,
  BadgeCheckIcon,
  EllipsisVerticalIcon,
  LayoutGridIcon,
  LayoutListIcon,
  SearchIcon,
  SettingsIcon,
  ThumbsDownIcon,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { useSyncExternalStore } from "react";

type DesktopLayout = "list" | "grid";

const DESKTOP_LAYOUT_STORAGE_KEY = "dashboard-desktop-layout";

function readDesktopLayout(): DesktopLayout {
  if (typeof window === "undefined") {
    return "list";
  }

  const savedLayout = window.localStorage.getItem(DESKTOP_LAYOUT_STORAGE_KEY);
  return savedLayout === "grid" ? "grid" : "list";
}

function subscribeToDesktopLayout(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === null || event.key === DESKTOP_LAYOUT_STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleLayoutChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener("dashboard-layout-change", handleLayoutChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener("dashboard-layout-change", handleLayoutChange);
  };
}

export default function Dashboard() {
  const desktopLayout = useSyncExternalStore(
    subscribeToDesktopLayout,
    readDesktopLayout,
    () => "list",
  );

  const onDesktopLayoutChange = (value: string) => {
    if (value !== "list" && value !== "grid") {
      return;
    }

    window.localStorage.setItem(DESKTOP_LAYOUT_STORAGE_KEY, value);
    window.dispatchEvent(new Event("dashboard-layout-change"));
  };

  return (
    <div className="flex flex-col min-h-screen items-center gap-10 px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="flex w-full flex-col gap-4 sm:gap-6 sm:flex-row items-center sm:justify-between">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
          <div className="aspect-square w-20 rounded-full bg-muted sm:w-24 md:w-25 overflow-hidden">
            <Image
              src="https://chamith.online/_next/image?url=%2Fimages%2Fprojects%2Fcodelk-website%2Fimg3.png&w=1080&q=75"
              alt="Profile Picture"
              width={100}
              height={100}
              className="object-cover"
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

      <div className="flex w-full mt-5 gap-6">
        <InputGroup>
          <InputGroupInput
            id="input-group-url"
            placeholder="Search videos..."
          />
          <InputGroupAddon className="p-0" align="inline-end">
            <Button variant="ghost" className="w-15">
              <SearchIcon size={16} />
            </Button>
          </InputGroupAddon>
        </InputGroup>

        <ToggleGroup
          variant="default"
          type="single"
          value={desktopLayout}
          onValueChange={onDesktopLayoutChange}
          className="hidden lg:inline-flex"
        >
          <ToggleGroupItem value="list" aria-label="Toggle list">
            <LayoutListIcon size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="Toggle grid">
            <LayoutGridIcon size={16} />
          </ToggleGroupItem>
        </ToggleGroup>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Bulk Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Scheduling</DropdownMenuLabel>
              <DropdownMenuItem>Setup Schedule</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem disabled className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        <div className="rounded-lg border bg-card pt-2 pb-6 px-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Checkbox id="video-select-mobile" className="w-6 h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <EllipsisVerticalIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>YouTube</DropdownMenuLabel>
                  <DropdownMenuItem>Watch</DropdownMenuItem>
                  <DropdownMenuItem>Go to Studio</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-muted">
            <Image
              src="https://chamith.online/_next/image?url=%2Fimages%2Fprojects%2Fcodelk-website%2Fimg3.png&w=1080&q=75"
              alt="Video thumbnail"
              fill
              className="object-cover object-center"
            />
          </div>

          <p className="mb-3 line-clamp-2 text-lg font-medium">
            An orange cat cooking with a chef&apos;s hat{" "}
            <span className="text-muted-foreground">
              <b>#shorts</b> <b>#fyp</b>
            </span>
          </p>

          <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Published</p>
              <p>Status</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1.2K</p>
              <p>Views</p>
            </div>
            <div>
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="h-auto p-0 font-medium">
                    163
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto py-2 px-4">
                  <div className="flex items-center justify-center gap-5">
                    <div className="flex items-center gap-2">
                      <ThumbsUp size={14} className="text-green-500" />
                      <span className="text-sm font-medium">120</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ThumbsDownIcon size={14} className="text-red-500" />
                      <span className="text-sm font-medium">43</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <p>Likes</p>
            </div>
          </div>
        </div>
      </div>

      {desktopLayout === "grid" ? (
        <div className="hidden w-full gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-lg border bg-card pt-2 pb-6 px-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3">
              <Checkbox id="video-select-desktop-grid" className="w-6 h-6" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <EllipsisVerticalIcon size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>YouTube</DropdownMenuLabel>
                    <DropdownMenuItem>Watch</DropdownMenuItem>
                    <DropdownMenuItem>Go to Studio</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-muted">
              <Image
                src="https://chamith.online/_next/image?url=%2Fimages%2Fprojects%2Fcodelk-website%2Fimg3.png&w=1080&q=75"
                alt="Video thumbnail"
                fill
                className="object-cover object-center"
              />
            </div>

            <p className="mb-3 line-clamp-2 text-lg font-medium">
              An orange cat cooking with a chef&apos;s hat{" "}
              <span className="text-muted-foreground">
                <b>#shorts</b> <b>#fyp</b>
              </span>
            </p>

            <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Published</p>
                <p>Status</p>
              </div>
              <div>
                <p className="font-medium text-foreground">1.2K</p>
                <p>Views</p>
              </div>
              <div>
                <HoverCard openDelay={10} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="h-auto p-0 font-medium">
                      163
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto py-2 px-4">
                    <div className="flex items-center justify-center gap-5">
                      <div className="flex items-center gap-2">
                        <ThumbsUp size={14} className="text-green-500" />
                        <span className="text-sm font-medium">120</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <ThumbsDownIcon size={14} className="text-red-500" />
                        <span className="text-sm font-medium">43</span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p>Likes</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden w-full overflow-x-auto lg:block">
          <Table className="min-w-[920px] table-fixed">
            <TableCaption>
              This table shows all private short videos only.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-14">
                  <Checkbox id="video-select-all" className="w-6 h-6" />
                </TableHead>
                <TableHead className="w-28">Thumbnail</TableHead>
                <TableHead className="w-[40%]">Title</TableHead>
                <TableHead className="w-28">Status</TableHead>
                <TableHead className="w-24">Views</TableHead>
                <TableHead className="w-24">Likes</TableHead>
                <TableHead className="w-28">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox id="video-select-desktop" className="w-6 h-6" />
                </TableCell>
                <TableCell>
                  <div className="relative aspect-[5/4] w-20 rounded-sm bg-muted overflow-hidden">
                    <Image
                      src="https://chamith.online/_next/image?url=%2Fimages%2Fprojects%2Fcodelk-website%2Fimg3.png&w=1080&q=75"
                      alt="Video thumbnail"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </TableCell>
                <TableCell className="max-w-[280px] xl:max-w-[420px]">
                  <p
                    className="truncate"
                    title="An orange cat cooking with a chef's hat #shorts #fyp"
                  >
                    An orange cat cooking with a chef&apos;s hat #shorts #fyp
                  </p>
                </TableCell>
                <TableCell>Published</TableCell>
                <TableCell>1.2K</TableCell>
                <TableCell>
                  <HoverCard openDelay={10} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Button variant="link">163</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto py-2 px-4">
                      <div className="flex items-center justify-center gap-5">
                        <div className="flex items-center gap-2">
                          <ThumbsUp size={14} className="text-green-500" />
                          <span className="text-sm font-medium">120</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <ThumbsDownIcon size={14} className="text-red-500" />
                          <span className="text-sm font-medium">43</span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>YouTube</DropdownMenuLabel>
                        <DropdownMenuItem>Watch</DropdownMenuItem>
                        <DropdownMenuItem>Go to Studio</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
