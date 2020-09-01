
async function ProfileGenerate() {
const InputField = document.querySelector('input').value;
const DisplayArea = document.getElementById('outer-box');
let profile = [];
let url = fetch(`https://api.github.com/users/${InputField}`).then(
    successResponse => {
        if (successResponse.status != 200) {
            return null;
        } else {
            return successResponse.json();
        }
    },
failResponse => {
    return null;
}
);
profile.push(url);
let result = await Promise.all(profile);
console.log(result[0]);

DisplayArea.innerHTML = `<div id="Profile-Box" class="Profile-Box">
<img src="${result[0].avatar_url}" class="Profile-Image" id="Profile-Image">
<h2>${result[0].name}</h2> 
<p>${result[0].login}</p>
<h2>FOLLOWERS:${result[0].followers}</h2>
<h2>FOLLOWING:${result[0].following}</h2>
    </div>`




}



