// app/github/page.js
import GitHubStats from "../../components/resume/github/GitHubStats";

export default function GitHubDashboard() {
  return (
    <main className="container px-4 py-8 mx-auto">
      

      <div className="grid grid-cols-1 gap-8">
        <GitHubStats />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section className="lg:col-span-1">
            {/* <RecentRepositories /> */}
          </section>
        </div>

        {/* <PinnedRepositories /> */}
      </div>
    </main>
  );
}
