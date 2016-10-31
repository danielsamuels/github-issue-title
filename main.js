var pageTitle = document.title.split(' · ')
document.title = [pageTitle[1].split(' ')[1], pageTitle[0], pageTitle[2]].join(' · ')
