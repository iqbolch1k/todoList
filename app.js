const input = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.querySelector(".ul ul");

const modal = document.querySelector('.modal')

const deleta = document.getElementById('delete')

function add() {
    btn.addEventListener('click', () => {
        if (input.value == '') {
            alert("Ma'lumot kiriting...");
        } else {
            ul.innerHTML += `
            <li class="olma">
                <b>${input.value}</b>
                <div class="ul-icon">
                    <i class="fa-regular fa-pen-to-square"></i> 
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </li>`;
            input.value = '';
        }
    });
}
add();

function delet() {
    ul.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-trash-can')) {
            const li = e.target.closest('li');
            modal.classList.add('modalActive');

            deleta.textContent = "O'chirish";
            deleta.style.backgroundColor = 'red';
            const itemText = li.querySelector('b').textContent.trim();
            document.querySelector('.text').textContent = `"${itemText}" o'chirilsinmi?`;

            deleta.onclick = () => {
                li.remove();
                modal.classList.remove('modalActive');
            };
        }
    });
}

delet();
function del_b() {
    ul.addEventListener("click", (a) => {
        if (a.target.tagName === 'B') {
            const delElement = document.createElement('del');
            delElement.textContent = a.target.textContent;
            a.target.replaceWith(delElement);
        }
    })
    ul.addEventListener("click", (b) => {
        if (b.target.tagName === 'DEL') {
            const bElement = document.createElement('b');
            bElement.textContent = b.target.textContent;
            b.target.replaceWith(bElement);
        }
    })
}
del_b();


function inadsf() {
    ul.addEventListener('click', (x) => {
        if (x.target.classList.contains('fa-pen-to-square')) {
            const fewcds = x.target.closest('li');
            modal.classList.add('modalActive');

            const modalText = document.querySelector('.text');
            modalText.innerHTML = '';

            const oldInput = modalText.querySelector('input');
            if (oldInput) {
                oldInput.remove();
            }

            const input = document.createElement('input');
            input.type = 'text';
            input.value = fewcds.querySelector('b').textContent.trim();
            modalText.appendChild(input);

            deleta.textContent = "Saqlash";
            deleta.style.backgroundColor = 'green';

            deleta.onclick = () => {
                fewcds.innerHTML = `
                <b>${input.value}</b>
                <div class="ul-icon">
                    <i class="fa-regular fa-pen-to-square"></i> 
                    <i class="fa-solid fa-trash-can"></i>
                </div>`;
                modal.classList.remove('modalActive');
            };
        }
    });
}
inadsf();
const strYear = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];
const strWeekDays = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
function updateTime() {
    const time = document.querySelector('.header h1');
    const year = document.querySelector('.header p');

    const newTime = new Date();

    let hours = newTime.getHours().toString().padStart(2, '0');
    let minutes = newTime.getMinutes().toString().padStart(2, '0');
    let seconds = newTime.getSeconds().toString().padStart(2, '0');

    let month = strYear[newTime.getMonth()];
    let yearText = newTime.getFullYear();
    let weekDay = strWeekDays[newTime.getDay()];

    time.textContent = `${hours}:${minutes}:${seconds}`;
    year.textContent = `${weekDay}, ${month}-${yearText}`;
}
setInterval(updateTime, 1000);