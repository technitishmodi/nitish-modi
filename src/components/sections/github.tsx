"use client";

import GitHubCalendar from "react-github-calendar";
import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { USER_NAMES, SOCIAL_LINKS } from "@/components/constants/data";

// =============================================
// THEME HOOK
// =============================================
const useTheme = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const updateTheme = () => {
      setColorScheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return colorScheme;
};

// =============================================
// MAIN COMPONENT
// =============================================
type Repo = {
  id: number;
  html_url: string;
  name: string;
  stargazers_count: number;
  description?: string | null;
  language?: string | null;
};

export default function Github() {
  const colorScheme = useTheme();
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${USER_NAMES.githubUsername}/repos?per_page=100`);
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        const data: Repo[] = await res.json();
        const sorted = (data || []).sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sorted.slice(0, 3));
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch repos");
        } else {
          setError(String(err) || "Failed to fetch repos");
        }
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-5" id="github">
      <h2 className="text-xl font-semibold mb-4">github.</h2>

      {/* GitHub Profile Link */}
      <div className="mb-4 flex items-center gap-2">
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-sm font-mono font-medium text-muted-foreground transition-colors flex items-center gap-1"
        >
          <SiGithub
            className="inline-block align-middle mr-1 text-muted-foreground"
            size={16}
            style={{ transition: "none" }}
          />
          {USER_NAMES.githubUsername}
          <MdOutlineArrowOutward className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>

      
      {/* GitHub Calendar */}
      <div className="w-full overflow-hidden">
        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <GitHubCalendar
              username={USER_NAMES.githubUsername}
              blockSize={8}
              blockMargin={5}
              colorScheme={colorScheme}
              fontSize={12}
            />
          </div>
        </div>
      </div>
      
      {/* Top 3 repositories by stars */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Top repositories</h3>

        {loading && <div className="text-sm text-muted-foreground">Loading repositories...</div>}
        {error && <div className="text-sm text-destructive">{error}</div>}

        {repos && repos.length === 0 && !loading && (
          <div className="text-sm text-muted-foreground">No repositories found.</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {repos && repos.map((r) => (
            <a key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 border border-border rounded-md hover:shadow-md transition-shadow h-full">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">★ {r.stargazers_count}</div>
              </div>
              {r.description && <div className="text-sm text-muted-foreground mb-2">{r.description}</div>}
              <div className="mt-auto text-xs text-muted-foreground">{r.language ?? "—"}</div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
