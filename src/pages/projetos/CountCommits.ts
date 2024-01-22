const base_url = 'https://api.github.com';

function httpGet(theUrl: string) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function httpGetHeader(theUrl: string) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp

}

export async function get_all_commits_count(repo: string) {
    const owner = 'LuHenriSouza';
    const sha = 'main';

    const first_commit = get_first_commit(owner, repo);
    const compare_url = base_url + '/repos/' + owner + '/' + repo + '/compare/' + first_commit + '...' + sha;
    const commit_req = httpGet(compare_url);
    const commit_count = JSON.parse(commit_req)['total_commits'] + 1;
    console.log('Commit Count: ', commit_count);
    return commit_count
}

function get_first_commit(owner: string, repo: string) {
    const url = base_url + '/repos/' + owner + '/' + repo + '/commits';
    const req = httpGetHeader(url);
    let first_commit_hash = '';
    if (req.getResponseHeader('Link')) {
        const page_url = req.getResponseHeader('Link')?.split(',')[1].split(';')[0].split('<')[1].split('>')[0];
        if (page_url) {
            const req_last_commit = httpGet(page_url);

            const first_commit = JSON.parse(req_last_commit);
            first_commit_hash = first_commit[first_commit.length - 1]['sha']
        }
    } else {
        const first_commit = JSON.parse(req.responseText);
        first_commit_hash = first_commit[first_commit.length - 1]['sha'];
    }
    return first_commit_hash;
}