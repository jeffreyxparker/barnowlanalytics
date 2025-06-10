
export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto max-w-screen-xl text-center text-sm text-muted-foreground">
        <p className="text-center mx-auto">&copy; {new Date().getFullYear()} Barn Owl Analytics. All rights reserved.</p>
      </div>
    </footer>
  );
}
