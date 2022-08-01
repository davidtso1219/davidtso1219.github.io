async function main() {
    const res = await fetch('data.json');
    const profiles = await res.json();
    let profilesIterator = getProfilesIterator(profiles);
    nextProfile(profilesIterator);
    document.getElementById('next').addEventListener('click', (e) => {
        nextProfile(profilesIterator);
    });
}

function nextProfile(iterator) {
    let nextProfile = iterator.next().value;
    let profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
    <img src="${nextProfile.image}" class="mb-3">
    <ul class="list-group mb-3">
        <li class="list-group-item">Name: ${nextProfile.name}</li>
        <li class="list-group-item">Age: ${nextProfile.age}</li>
        <li class="list-group-item">Location: ${nextProfile.location}</li>
        <li class="list-group-item">Preference: ${nextProfile.gender} looking for ${nextProfile.lookingfor}</li>
    </ul>
    `;
}

function getProfilesIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            if (nextIndex >= profiles.length) {
                nextIndex = 0;
            }
            return {value: profiles[nextIndex++], done: false}
        }
    }
}

main();
