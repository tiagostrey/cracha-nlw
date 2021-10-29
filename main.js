const linksSocialMedia = {
  github: 'tiagostrey',
  youtube: 'tiagostrey',
  facebook: 'tiagostrey7',
  instagram: 'streytiago',
  twitter: 'tiagostrey'
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = "Tiago Strey"
  // userName.textContent = 'Tiago Strey'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      pageTitle.textContent = `${data.name} - DoWhile 2021`
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()

// ARROW FUNCTIONS: são funções "anônimas", onde só é definido o argumento e não um nome.
//
// Ao invés de:
// function nomeDaFuncao(argumento1, argumento2) {
//   code
// }
//
// Escrevemos:
// (argumento1, argumento2) => {
//   code
// }
//
// Quando há apenas uma ação na arrow function, não é necessário utilizar chaves.
// Ex:
// (argumento1, argumento2) => code
