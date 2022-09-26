let count = 50;
const instance = new Typewriter('.text-typing-welcome', {
    strings: ['Hello ! Bienvenue sur mon petit cv !', 'Savourons ensemble les potentiels du CSS !', 'Un petit CV from scratch avec du HTML et du CSS !', 'Best UI,full responsive !', 'Rien n’est impossible à celui qui croit au CSS !'],
    autoStart: true,
    loop: true,
});
const progressSkill = () => {
    document.querySelectorAll('.skill_value div').forEach(progressbar => {
        progressbar.style.width = `${count}%`
        count += 4.3
    })
}
const showCv = () => {
    document.querySelector('.spiks').addEventListener('click', () => {
        document.querySelector('.Welcome-section').style.display = 'none'
        document.querySelector('.container').style.height = 'auto'
    })

}


window.addEventListener('load', () => {
    document.querySelector('.loading-page').style.display = 'none'
    document.querySelector('.Welcome-section').style.display = 'flex'
    document.querySelector('.container').style.height = '100%'
    progressSkill()
    showCv()
})
