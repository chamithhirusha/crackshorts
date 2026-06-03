"use client";

import ActionMenu from "@/components/pages/dashboard/ActionMenu";
import ChannelHeader from "@/components/pages/dashboard/ChannelHeader";
import ContentGrid from "@/components/pages/dashboard/ContentGrid";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/hooks/useResponsive";
import { Layout } from "@/utils/enums";
import { useState } from "react";

export default function Dashboard() {
  const { isMobile } = useResponsive();
  const [desktopLayout, setDesktopLayout] = useState<Layout>(Layout.LIST);

  const activeLayout = isMobile ? Layout.GRID : desktopLayout;

  const handleDesktopLayoutChange = (value: Layout) => {
    if (value === Layout.LIST || value === Layout.GRID) {
      setDesktopLayout(value);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center gap-10 px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <ChannelHeader />

      <ActionMenu
        isMobile={isMobile}
        desktopLayout={desktopLayout}
        handleDesktopLayoutChange={handleDesktopLayoutChange}
      />

      {isMobile && <hr className="w-full border-muted" />}

      {activeLayout === Layout.GRID && (
        <div className="w-full flex gap-4">
          <Button variant="link" size="sm">
            Select all
          </Button>
        </div>
      )}

      <ContentGrid activeLayout={activeLayout} />
    </div>
  );
}
