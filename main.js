function runScript() {
  var pageTitle = document.title.split(' · ')
  if (pageTitle.length === 3) {
    document.title = [pageTitle[1].split(' ')[1], pageTitle[0], pageTitle[2]].join(' · ')
  }
}

document.addEventListener('pjax:end', runScript)

runScript()
