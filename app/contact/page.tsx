import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <div className="text-sm text-primary font-medium mb-4">
          Contact
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight">
          Get in touch
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          If you are working through post-quantum migration questions 
          or system design decisions and want a clear discussion, 
          you can reach out.
        </p>
      </div>

      {/* Contact options */}
      <div className="max-w-2xl space-y-8">

        <div className="border border-border rounded-xl p-6 bg-white">
          <h2 className="text-sm font-medium text-primary mb-2">
            Email
          </h2>
          <a
            href="mailto:ajaysalunkhe2026@gmail.com"
            className="text-lg text-dark hover:text-primary transition"
          >
            ajaysalunkhe2026@gmail.com
          </a>
          <p className="text-muted text-sm mt-2">
            Preferred for detailed context and technical discussions.
          </p>
        </div>

        <div className="border border-border rounded-xl p-6 bg-white">
          <h2 className="text-sm font-medium text-primary mb-2">
            LinkedIn
          </h2>
          <a
  href="https://www.linkedin.com/in/ajay-salunkhe-9a72b7406"
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg text-dark hover:text-primary transition"
>
  Connect on LinkedIn
</a>
          <p className="text-muted text-sm mt-2">
            Suitable for introductions and professional context.
          </p>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-muted text-[15px] leading-relaxed">
            Please include relevant context about your system or problem space 
            when reaching out. Clear context helps make the conversation useful.
          </p>
        </div>

      </div>
    </div>
  );
}