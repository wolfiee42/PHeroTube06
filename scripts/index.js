/* fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then(res => res.json())
    .then(data => datass(data));

function datass(data){
    const something = data.data;
    something.forEach(datum => console.log(datum));
} */

/* fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(data => datass(data));

function datass(data){
    const something = data.data;
    something.forEach(datum => console.log(datum));
} */


const mainContainer = document.getElementById('main-section-container');
mainContainer.innerHTML = `
    <button class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">All</button>
    <button class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Music</button>
    <button class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Comedy</button>
    <button class="px-3 rounded-md font-semibold py-1 mx-2 bg-slate-300 hover:bg-slate-400">Drawing</button>
`;