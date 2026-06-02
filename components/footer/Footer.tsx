export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto py-4 px-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} CrackShorts. All rights reserved.
      </div>
    </footer>
  );
}
