import GitHubStats from '../../components/resume/github/GitHubStats';

export default function GitHubDashboard() {
  return (
    <main className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-8">
        <GitHubStats />
      </div>
    </main>
  );
}
