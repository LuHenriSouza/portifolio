import { get_all_commits_count } from './CountCommits';

const username = 'LuHenriSouza';

const token = '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';

const apiUrl = `https://api.github.com/users/${username}/repos`;

const headers = {
  Authorization: `Bearer ${token}`,
};

interface IGitHubRepository {
  html_url: string;
  name: string;
  private: boolean;
  description: string;
  created_at: Date;
}

interface IResponse {
  url: string;
  name: string;
  description: string;
  created_at: Date;
  totalCommit: number;
}

let projetos: IResponse[] = [];

fetch(apiUrl, { headers })
  .then(response => response.json())
  .then(async (data: IGitHubRepository[]) => {
    const dataForProject = await Promise.all(data.map(async repo => {
      if (repo.private == false) {
        const totalCommits = await get_all_commits_count(repo.name);

        return {
          url: repo.html_url,
          name: repo.name,
          description: repo.description,
          created_at: repo.created_at,
          totalCommit: totalCommits
        } as IResponse;
      }
    }));

    projetos = dataForProject.filter((projeto): projeto is IResponse => projeto !== undefined);

    projetos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    console.log(projetos);
  })
  .catch(error => console.error('Erro ao obter repositórios:', error));

export { projetos };