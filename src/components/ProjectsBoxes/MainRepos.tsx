import { useCallback, useEffect, useMemo, useState } from "react";
import SkeletonMainRepo from "../CustomSkeleton/SkeletonMainRepo";
import Repos, { RepositoriesProps } from "./Repos";

const MainRepos: React.FC = () => {
  const [repos, setRepos] = useState([]);
  const [mainRepos, setMainRepos] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  async function getGithubData() {
    setLoading(true);

    const response = await fetch(
      "https://api.github.com/users/lucasellery/repos?per_page=80"
    )
    .then(
      data => data.json()
    )
    .finally(() => setLoading(true))
    .catch(err => console.log(err));

    setRepos(response);
    setLoading(false);
  }

  const getMainRepos = (repos: any) => {
    const repo = repos.filter((repo: any) => {
      return (
        repo.name === "groomsmen-guide" ||
        repo.name === "arrudaflix" ||
        repo.name === "move.it" ||
        repo.name === "flappybird" ||
        repo.name === "thepokedex"
      );
    });

    setMainRepos(repo);

    return repo;
  };

  const memoizedMainRepos = useMemo(() => {
    return getMainRepos(repos);
  }, [repos]);

  useEffect(() => {
    getGithubData();
  }, []);

  return (
    <div className="grid gap-5 my-7 grid-cols-1 md:grid-cols-2">
      {memoizedMainRepos?.map((repo: RepositoriesProps) => (
        <>
          {loading ? (
            <SkeletonMainRepo />
          ) : (
            <Repos
              key={repo.id}
              name={repo?.name}
              description={repo?.description}
              stargazers_count={repo?.stargazers_count}
              forks={repo?.forks}
              language={repo?.language}
              homepage={repo?.homepage}
            />
          )}
        </>
        
      ))}
    </div>
  );
}

export default MainRepos;