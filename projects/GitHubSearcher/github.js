class GitHub {
    static client_id = 'replace this with your GitHub client ID';
    static client_secret = 'replace this with your GitHub client secret';
    static repos_count = 5;
    static repos_sort = 'updated: asc';

    static async getUser(userName) {

        // get profile
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${GitHub.client_id}&client_secret=${GitHub.client_secret}`);
        const profile = await profileResponse.json();

        // get repos
        const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${GitHub.repos_count}&sort=${GitHub.repos_sort}&client_id=${GitHub.client_id}&client_secret=${GitHub.client_secret}`);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}