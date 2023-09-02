let msg_container = document.getElementById('msg-container');
var funfact_list = [    "NVIDIA a été fondée en 1993 par trois personnes : Jensen Huang, Chris Malachowsky et Curtis Priem.",    "Le nom 'NVIDIA' est une combinaison des mots 'Nevada' et 'vidéo'.",    "En plus des GPU, NVIDIA produit également d'autres matériels et logiciels informatiques tels que les processeurs mobiles Tegra et le NVIDIA Shield.",    "Le premier grand succès de NVIDIA sur le marché des GPU est survenu avec la sortie du RIVA 128 en 1997, qui était 400 fois plus puissant que ses concurrents à l'époque.",    "Le GeForce 256, sorti en 1999, a été le premier GPU à être commercialisé sous la marque GeForce et est considéré par beaucoup comme le premier GPU moderne.",    "NVIDIA est un acteur majeur dans le domaine de l'intelligence artificielle et de l'apprentissage automatique, ses GPU étant largement utilisés dans ces applications.",    "NVIDIA a une longue histoire de collaboration avec les développeurs de jeux pour optimiser leurs jeux pour une utilisation avec les GPU NVIDIA.",    "En 2020, NVIDIA a annoncé son intention d'acquérir ARM Holdings, un important concepteur de microprocesseurs utilisés dans une large gamme de dispositifs.",    "NVIDIA est devenu le fabricant de GPU le plus rentable au monde en 2019, avec des revenus annuels de plus de 11 milliards de dollars."];


function funfact(){
    let msg_div = document.createElement('div');
    msg_div.classList.add('msg');
    var indx = Math.floor(Math.random() * funfact_list.length)
    if (funfact_list.length === 0){
         funcfact = "Bravo vous avez épuisé tout les funfacts !"
    }else{
        var funcfact = funfact_list[indx];
        funfact_list.splice(indx, 1);
    }

    msg_div.innerHTML = `<img class="my-pp" src="./asset/img3/my-pp.png" alt="my pp">
                        <p class="nvida-infos" style="background:var(--funfact-color)">${funcfact}</p>

`;

msg_container.appendChild(msg_div);

}


