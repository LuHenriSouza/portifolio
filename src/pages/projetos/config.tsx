import axios from 'axios';
import { get_all_commits_count } from './CountCommits';

const username = 'LuHenriSouza';

const apiUrl = `https://api.github.com/users/${username}/repos`;

interface IGitHubRepository {
  html_url: string;
  name: string;
  private: boolean;
  description: string;
  created_at: Date;
}

export interface IResponse {
  url: string;
  name: string;
  description: string;
  created_at: Date;
}

export const getProjects = async (): Promise<IResponse[] | undefined> => {
  try {
    const projetos: IResponse[] = [];
    const { data } = await axios.get(apiUrl);
    if (data) {
      data.map(async (repo: IGitHubRepository) => {
        if (!repo.private) {
          projetos.push(
            {
              url: repo.html_url,
              name: repo.name,
              description: repo.description,
              created_at: repo.created_at
            }
          );
        }
      });

      projetos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      console.log(projetos);
      return projetos;
    } else {
      alert('Ocorreu algum erro!');
    }
  }
  catch (e) {
    console.log(e);
  }
}

export const getTotalCommits = async (): Promise<number[] | undefined> => {
  try {
    const response = await getProjects();
    if (response) {
      const totalCommits: number[] = [];

      // Usando um loop for...of para garantir a ordem das chamadas
      for (const repo of response) {
        const total = await get_all_commits_count(repo.name);
        totalCommits.push(total);
      }

      return totalCommits;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getCommits = async (name: string): Promise<number | undefined> => {
  try {
    const total = await get_all_commits_count(name);

    return total;

  } catch (e) {
    console.log(e);
    throw e;
  }
};