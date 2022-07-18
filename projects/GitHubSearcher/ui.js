class UI {
    static profile = document.getElementById('profile');

    static showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        })
        document.getElementById('repos').innerHTML = output;
    }

    static showAlert(message, className) {

        // clear existing alert
        UI.clearAlert();

        // create a div
        const alertDiv = document.createElement('div');

        // put some text in the div
        alertDiv.appendChild(document.createTextNode(message));

        // add the className to the div
        alertDiv.className = className;

        // find the parent
        const parent = document.querySelector('.search-container');

        // find the element to insert before
        const search = document.querySelector('.search');

        // insert the div
        parent.insertBefore(alertDiv, search);

        // timeout
        setTimeout(UI.clearAlert, 3000);
    }

    static clearAlert() {
        const alert = document.querySelector('.alert');

        if (alert) {
            alert.remove();
        }
    }

    static clearProfile() {
        UI.profile.innerHTML = '';
    }

    static showProfile(user) {
        profile.innerHTML = `
        <div class="card card-body px-3">
            <div class="row">
                <div class="col-md-3 p-3 d-flex flex-column justify-content-between">
                    <img src="${user.avatar_url}" class="mt-3 w-100"></img>
                    <a href="${user.html_url}" class="img-fluid btn btn-primary btn-block mt-3 w-100">View Profile</a>
                </div>
                <div class="col-md-9 mt-3 p-3">
                    <div>
                        <span class="badge bg-primary mb-2">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary mb-2">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success mb-2">Followers: ${user.followers}</span>
                        <span class="badge bg-info mb-2">Following: ${user.following}</span>
                    </div>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company === null ? 'N/A' : user.company}</li>
                        <li class="list-group-item">Website: ${user.blog === '' ? 'N/A' : `<a href="${user.blog}">${user.blog}</a>`}</li>
                        <li class="list-group-item">Location: ${user.location === null ? 'N/A' : user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading m-3">Latest Repos</h3>
        <ul class="list-group" id="repos">
        </ul>
        `
    }
}