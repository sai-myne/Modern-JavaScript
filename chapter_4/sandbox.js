// get a reference to the 'ul'
const ul = document.querySelector('.people');

const peopel = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

peopel.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
})

ul.innerHTML = html;



