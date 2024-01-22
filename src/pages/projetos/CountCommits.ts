const base_url = 'https://api.github.com';

async function httpGet(theUrl: string): Promise<string> {
    const response = await fetch(theUrl);
    const data = await response.text();
    return data;
}

async function httpGetHeader(theUrl: string): Promise<Response> {
    const response = await fetch(theUrl);
    return response;
}

export async function get_all_commits_count(repo: string): Promise<number> {
    const owner = 'LuHenriSouza';
    const sha = 'main';

    const first_commit = await get_first_commit(owner, repo);
    const compare_url = `${base_url}/repos/${owner}/${repo}/compare/${first_commit}...${sha}`;
    const commit_req = await httpGet(compare_url);
    const commit_count = JSON.parse(commit_req)['total_commits'] + 1;
    console.log('Commit Count: ', commit_count);
    return commit_count;
}

async function get_first_commit(owner: string, repo: string): Promise<string> {
    const url = `${base_url}/repos/${owner}/${repo}/commits`;
    const req = await httpGetHeader(url);

    let first_commit_hash = '';

    if (req.headers.get('Link')) {
        const page_url = req.headers.get('Link')?.split(',')[1].split(';')[0].split('<')[1].split('>')[0];

        if (page_url) {
            const req_last_commit = await httpGet(page_url);

            const first_commit = JSON.parse(req_last_commit);
            first_commit_hash = first_commit[first_commit.length - 1]['sha'];
        }
    } else {
        const first_commit = JSON.parse(await req.text());
        first_commit_hash = first_commit[first_commit.length - 1]['sha'];
    }

    return first_commit_hash;
}
