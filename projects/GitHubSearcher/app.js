// UI Elements
const searchUser = document.getElementById('searchUser');

main();

function loadEventListeners() {
    searchUser.addEventListener('keyup', (e) => {
        const userText = e.target.value;
        if (userText !== '') {
            GitHub.getUser(userText)
            .then((data) => {
                if (data.profile.message === 'Not Found') {
                    UI.showAlert('User Not Found', 'alert alert-danger');
                }
                else {
                    UI.showProfile(data.profile);
                    UI.showRepos(data.repos);
                }
            })
        }
        else {
            UI.clearProfile();
        }
    })
}

function main() {
    loadEventListeners();
}