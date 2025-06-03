export default function Footer() {
    return (
      <footer className="w-full border-t border-neutral-800 py-4 text-center text-sm text-neutral-500 mt-auto">
        <p>
          &copy; {new Date().getFullYear()} Dave Kiribwa. Built with Next.js & Tailwind.
        </p>
      </footer>
    );
  }
  