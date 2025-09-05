import { ABOUT_ME } from "@/components/constants/data";

export default function Footer() {
  return (
    <footer className="text-center py-8 mt-16">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {ABOUT_ME.name}. All rights reserved.
      </p>
      <div className="flex justify-center mt-4">
        <a href="#" className="text-sm text-muted-foreground hover:underline">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="text-sm text-muted-foreground hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
