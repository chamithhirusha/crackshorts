import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DatabaseZapIcon,
  RocketIcon,
  StoneIcon,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const howItWorksSteps = [
    {
      id: 1,
      title: "Upload videos",
      description:
        "Drag and drop or select multiple video files to build your queue.",
      icon: "upload",
      isBeta: true,
    },
    {
      id: 2,
      title: "Set schedule",
      description: "Define start date, time, and spacing between each upload.",
      icon: "schedule",
      isBeta: false,
    },
    {
      id: 3,
      title: "Add metadata",
      description:
        "Apply titles, descriptions, and tags using reusable templates.",
      icon: "metadata",
      isBeta: false,
    },
    {
      id: 4,
      title: "Launch",
      description: "Confirm and let automation publish everything on schedule.",
      icon: "launch",
      isBeta: false,
    },
  ];

  const iconMap = {
    upload: StoneIcon,
    schedule: TimerIcon,
    metadata: DatabaseZapIcon,
    launch: RocketIcon,
  } as const;

  return (
    <main>
      <section
        id="hero"
        className="flex flex-col items-center justify-center gap-10 pt-40 pb-5 px-4"
      >
        <Badge variant="destructive">
          <RocketIcon className="inline-block mr-2" />
          <span className="text-destructive">
            More than 20M shorts scheduled.
          </span>
        </Badge>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center">
            Bulk video scheduling
          </h1>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-muted-foreground text-center">
            made simple.
          </h1>
        </div>
        <hr className="w-11/12 max-w-4xl border-muted" />
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Let&apos;s get started</Button>
          <Button variant="link" className="w-full sm:w-auto">
            Contribute on GitHub
          </Button>
        </div>
      </section>

      <section
        id="hero-image"
        className="relative flex items-center justify-center py-10 px-4"
      >
        <div className="relative w-full">
          <Image
            src="https://chamith.online/_next/image?url=%2Fimages%2Fprojects%2Fcodelk-website%2Fimg3.png&w=1080&q=75"
            alt="Demo of the app"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg max-h-[600px] w-full object-cover"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative flex flex-col items-center justify-center py-32 px-4 overflow-hidden"
      >
        {/* background glow */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="flex flex-col items-center justify-center text-center gap-3 max-w-2xl relative z-10">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
            Process
          </h3>
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">
            How it works
          </h1>
        </div>
        <div className="mt-20 w-full max-w-6xl relative z-10">
          {/* connector line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-muted" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {howItWorksSteps.map((step) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center gap-4 px-6 py-15 rounded-2xl border bg-background/40 backdrop-blur-md hover:shadow-xl transition"
                >
                  <div className="absolute -top-4 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {step.id}
                  </div>
                  <Icon
                    className="w-10 h-10 mb-5 text-muted-foreground"
                    strokeWidth={1}
                  />
                  <Badge
                    variant={step.isBeta ? "destructive" : "secondary"}
                    className="px-2 py-1"
                  >
                    {step.isBeta ? "Beta" : "Stable"}
                  </Badge>
                  <h2 className="text-xl font-medium">{step.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
