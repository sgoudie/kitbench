import { ThemeSwitcher } from "@/components/theme-switcher";

export function AppFooter() {
  return (
        <footer className="w-full max-w-5xl flex flex-row justify-between border-t mx-auto text-center text-xs gap-8 py-16">
            <p>A collab by <a
                href="https://goudieworks.co"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
            >
                Goudie Works
            </a> + <a
                href="https://positivehuman.co"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
            >
                Positive Human
            </a> 
            </p>
            <div className="flex flex-row gap-8">
                <ThemeSwitcher />
            </div>
        </footer>
  );
}
