const mainContainer = document.getElementById('main-section-container');
mainContainer.innerHTML = `
    <button id="all-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">All</button>
    <button id="music-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Music</button>
    <button id="comedy-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Comedy</button>
    <button id="drawing-btn" class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Drawing</button>
`;

// default section
fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then(res => res.json())
    .then(data => datass(data));



function datass(data) {
    const something = data.data;
    all(something);

}

// for all section
function infoo(id) {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(res => res.json())
        .then(data => {
            const dataass = data.data;
            all(dataass);
            console.log(dataass);
            console.log(data);

            if (dataass.length > 0) {
                all(dataass);
            } else if (dataass.length === 0) {
                nothing();
            }
        })

}



// indivitual calling
document.getElementById('all-btn').addEventListener('click', () => {
    infoo(1000);
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


        function secToHM(totalSeconds) {
            const secInMin = 60;
            const secInHr = 60 * secInMin;


            const hours = Math.floor(totalSeconds / secInHr);
            const minutes = Math.floor((totalSeconds % secInHr) / secInMin);

            return { hours, minutes };
        }

        const totalSeconds = datum.others.posted_date;
        const { hours, minutes } = secToHM(totalSeconds);



        const divi = document.createElement('div');

        divi.innerHTML = `
            <div class="m-4">
                <div class="relative">
                    <img class="w-[300px] h-[150px] mx-auto rounded-lg" src="${datum.thumbnail}">
                    
                        <p>${datum.others.posted_date ? `<div class="absolute bottom-2 right-10 md:right-8 lg:right-5 bg-slate-100 p-1 text-black rounded-lg text-xs">${hours}hrs ${minutes}mins ago</div>` : ' '}</p>
                    
                </div>
                <div class="flex justify-center lg:justify-between items-center gap-8 lg:gap-4 mx-5 mt-5">
                    <div>
                        <img class="w-[50px] h-[50px] rounded-full" src="${datum.authors[0].profile_picture}">
                    </div>
                    <p class="font-bold">${datum.title}<p>
                </div>
                <div class="flex md:flex-col lg:flex-col gap-5 md:gap-0 lg:gap-0  justify-center mx-10 my-2">
                    <div class="flex items-center justify-start gap-2">
                        <p>${datum.authors[0].profile_name}</p>
                        <p>${datum.authors[0].verified ? '<img class="w-[15px] h-[15px]" src="image/fi_10629607.png">' : ' '}</p>
                    </div>
                    <p>${datum.others.views} views</p>
                </div>
            </div>`;

        cardContainer.appendChild(divi);
    })
}

const nothing = () => {
    const cardContainer = document.getElementById('card-containerr');
    cardContainer.textContent = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <img src="image/Icon.png">
    <p>Oops!! Sorry, There is no content here.</p>
    `;
    div.classList = `flex flex-col justify-center items-center gap-5 my-28`
    cardContainer.appendChild(div);
}

document.getElementById('sort-btn').addEventListener('click', ()=>{
    location.reload();
})

document.getElementById('blogBtn').addEventListener('click', ()=> {
    window.location.href= 'blog.html';
})