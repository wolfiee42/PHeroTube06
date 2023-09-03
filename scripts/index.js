const categories = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const items = data.data;

    // btn section 
    const tabSection = document.getElementById('tab-container')


    //dynamically creating btn section

    // if i want to select specific 
    // items.slice(0, 2).forEach

    // else normally
    items.forEach((datum) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleCategoryId('${datum.category_id}')" class="btn btn-error hover:bg-white ">${datum.category}</a>`;
        tabSection.appendChild(div)
    })
}





// with this function im linking category name and categoryId and calling this function from btn onclick
const handleCategoryId = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const situation = data.status
    const datumm = data.data;

    if (situation) {
        const cardcontainer = document.getElementById('card-container');
        cardcontainer.textContent = '';
        cardcontainer.classList = `grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4`
        datumm.forEach(datum => {

            function secToHM(totalSeconds) {
                const secInMin = 60;
                const secInHr = 60 * secInMin;
    
    
                const hours = Math.floor(totalSeconds / secInHr);
                const minutes = Math.floor((totalSeconds % secInHr) / secInMin);
    
                return { hours, minutes };
            }
    
            const totalSeconds = datum.others.posted_date;
            const { hours, minutes } = secToHM(totalSeconds);
            const div = document.createElement('div');
            div.innerHTML = `
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
            </div>
        `
            cardcontainer.appendChild(div)
        })
    } else {
        const cardContainer = document.getElementById('card-container');
        cardContainer.classList = ``
        cardContainer.textContent = '';

        const div = document.createElement('div');
        div.innerHTML = `
            <img src="image/Icon.png">
            <p>Oops!! Sorry, There is no content here.</p>
            `;
        div.classList = `flex flex-col justify-center items-center gap-5 my-28`
        cardContainer.appendChild(div);
    }


    console.log(situation);
    console.log(datumm);

}
categories()
handleCategoryId(1000);

document.getElementById('blogBtn').addEventListener('click', ()=> {
    window.location.href= 'blog.html';
})