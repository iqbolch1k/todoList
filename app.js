const input = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.querySelector(".ul ul");

btn.addEventListener('click', () => {
    console.log(input.value);
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

// Voqeani delegatsiya qilish
ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        const li = e.target.closest('li');
        li.remove();
        alert("O'chirildi!");
    }
});
ul.addEventListener("click", (a) => {
    if (a.target.tagName === 'B') {
        const delElement = document.createElement('del');
        delElement.textContent = a.target.textContent; 
        a.target.replaceWith(delElement); 
    }
})
ul.addEventListener("click", (b) => {
    if (b.target.tagName  === 'DEL') {
        const bElement = document.createElement('b');
        bElement.textContent = b.target.textContent;
        b.target.replaceWith(bElement);
    }
})