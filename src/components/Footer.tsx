import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-foreground/70 flex items-center gap-2">
            Built with <Heart className="text-primary" size={16} fill="currentColor" /> by Nehal Asif
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nehal Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
