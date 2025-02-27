let corpoDoSite = document.getElementById('corpo-do-site')

document.getElementById('btn-modo-claridade')
.addEventListener('click', function(){
    if(corpoDoSite.classList.contains('modo-escuro') === false){
        corpoDoSite.classList.add('modo-escuro')
    }

    else if(corpoDoSite.classList.contains('modo-escuro'))
        corpoDoSite.classList.remove('modo-escuro')
})

