
export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container max-w-screen-xl text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Customer GPS. All rights reserved.</p>
        <p>Your compass for DTC market insights.</p>
      </div>
    </footer>
  );
}
