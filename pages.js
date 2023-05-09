
const divId = el => {
    const name = el.innerText;
    return `#${name.toLowerCase()}`;
}

const tabSwitch = e => {
    let t = e.target;
    if (t.classList.contains('selected')) return;
    let s = document.querySelector('.selected');

    s.classList.remove('selected');
    t.classList.add('selected');
    document.querySelector(divId(s)).classList.add('hidden');
    document.querySelector(divId(t)).classList.remove('hidden');
}

const main = () => {
    const nav = document.querySelector('nav');
    for (let tab of nav.children) {
        tab.addEventListener('click', tabSwitch);
    }
}

main();
