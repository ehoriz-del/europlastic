const countries = {


Germany: {

flag:"🇩🇪",

society:
"German Society of Plastic, Reconstructive and Aesthetic Surgeons",

description:
"Find official information about recognized plastic surgery specialists in Germany.",

website:
"https://www.dgpraec.de"

},



France: {

flag:"🇫🇷",

society:
"French Plastic Surgery Professional Resources",

description:
"Explore official French plastic surgery information and resources.",

website:
"https://www.sofcep.fr"

},



Italy: {

flag:"🇮🇹",

society:
"Italian Society of Plastic Surgery",

description:
"Access official Italian plastic surgery resources.",

website:
"https://www.sicpre.it"

},



Spain: {

flag:"🇪🇸",

society:
"Spanish Society of Plastic Surgery",

description:
"Find official Spanish plastic surgery information.",

website:
"https://secpre.org"

},



Switzerland: {

flag:"🇨🇭",

society:
"Swiss Plastic Surgery Society",

description:
"Review Swiss specialist information and resources.",

website:
"https://www.plastic-surgery.ch"

},



Netherlands: {

flag:"🇳🇱",

society:
"Dutch Association for Plastic Surgery",

description:
"Find official Dutch plastic surgery resources.",

website:
"https://www.nvpc.nl"

}


};





function showCountry(country){


const data = countries[country];



document.getElementById("info").innerHTML = `


<h2>
${data.flag} ${country}
</h2>


<h3>
${data.society}
</h3>


<p>
${data.description}
</p>


<a href="${data.website}" target="_blank">

Official Website

</a>


`;


}
