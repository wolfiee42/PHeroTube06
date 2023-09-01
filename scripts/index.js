
const mainContainer = document.getElementById('main-section-container');
mainContainer.innerHTML = `
    <button id="all-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">All</button>
    <button id="music-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Music</button>
    <button id="comedy-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Comedy</button>
    <button id="drawing-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Drawing</button>
`;


fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then(res => res.json())
    .then(data => datass(data));

function datass(data) {
    const something = data.data;
    all(something);
}

function infoo(id) {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(res => res.json())
        .then(data => {
            const dataass = data.data;
            all(dataass)
        })
}


document.getElementById('all-btn').addEventListener('click', () => {
    infoo(1000)
})
document.getElementById('music-btn').addEventListener('click', () => {
    infoo(1001)
})
document.getElementById('comedy-btn').addEventListener('click', () => {
    infoo(1003)
})
document.getElementById('drawing-btn').addEventListener('click', () => {
    infoo(1005)
})

const all = (data) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';

    data.forEach(datum => {
        const divi = document.createElement('div');

        divi.innerHTML = `
            <div class="m-4">
                <div>
                    <img class="w-[300px] h-[150px] mx-auto rounded-lg" src="${datum.thumbnail}">
                </div>
                <div class="flex justify-between items-center gap-4 mx-5 mt-5">
                    <div>
                        <img class="w-[50px] h-[50px] rounded-full" src="${datum.authors[0].profile_picture}">
                    </div>
                    <p class="font-bold">${datum.title}<p>
                </div>
                <div class="mx-10 my-2">
                    <p>${datum.authors[0].profile_name}</p>
                    <p>${datum.others.views} views</p>
                </div>
            </div>`;

        cardContainer.appendChild(divi);
    })
}


// for specific videos



