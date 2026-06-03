import { Button } from "@/components/ui/button";
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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Layout } from "@/utils/enums";
import { LayoutGridIcon, LayoutListIcon, SearchIcon } from "lucide-react";

interface Props {
  isMobile: boolean;
  desktopLayout: Layout;
  handleDesktopLayoutChange: (value: Layout) => void;
}

export default function ActionMenu({
  isMobile,
  desktopLayout,
  handleDesktopLayoutChange,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-5 gap-4 sm:gap-6">
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="Search videos..." />
        <InputGroupAddon className="p-0" align="inline-end">
          <Button variant="ghost" className="w-15">
            <SearchIcon size={16} />
          </Button>
        </InputGroupAddon>
      </InputGroup>

      {!isMobile && (
        <ToggleGroup
          variant="default"
          type="single"
          value={desktopLayout}
          onValueChange={handleDesktopLayoutChange}
        >
          <ToggleGroupItem value={Layout.LIST} aria-label="Toggle list">
            <LayoutListIcon size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value={Layout.GRID} aria-label="Toggle grid">
            <LayoutGridIcon size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      )}

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
  );
}
