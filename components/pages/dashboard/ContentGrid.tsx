import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Layout } from "@/utils/enums";
import { EllipsisVerticalIcon, ThumbsDownIcon, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface Props {
  activeLayout: Layout;
}

export default function ContentGrid({ activeLayout }: Props) {
  return (
    <>
      {activeLayout === Layout.GRID ? (
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              <span className="text-muted-foreground">#shorts #fyp</span>
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
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xs text-foreground font-medium"
                    >
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
                <p className="text-xs text-muted-foreground">Likes</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
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
    </>
  );
}
