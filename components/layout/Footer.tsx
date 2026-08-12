import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-muted">
        <div>
          © {new Date().getFullYear()} Ajay Salunkhe · System Architect
        </div>

        <div className="flex gap-6">
          <Link href="https://github.com/ajaysalunkhe2026-netizen" className="hover:text-dark transition" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/ajay-salunkhe-9a72b7406" className="hover:text-dark transition" target="_blank">
  LinkedIn
</Link>
          
          <Link href="/contact" className="hover:text-dark transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}