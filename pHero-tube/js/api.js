
function blog(){
    window.location.href=('blog.html')
}
const dataload = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const categories = data.data
    displyShow(categories)
}
function displyShow(categories){
const button = document.getElementById('button')
categories.forEach(categorie => {
    const DivShow = document.createElement('div')
    DivShow.innerHTML=`
    <button onclick="catagoriDataload('${categorie.category_id}')" class="font bg-[#25252526] py-2 px-6 mb-4 rounded-md focus:bg-[#FF1F3D]">${categorie.category}</button>
    `
    button.appendChild(DivShow)
});
}
const catagoriDataload=async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const AllDatas = data.data
    showAlldata(AllDatas)
    // sortbyView(AllDatas)

}
function showAlldata(AllDatas){
  const allButton = document.getElementById('allButton')
    allButton.innerHTML=''
   AllDatas.forEach(alldata=> {
       const NewDiv = document.createElement('div')
       NewDiv.innerHTML=`
       <div class="font">
       <div class="relative">
       <img class="rounded-lg lg:h-[250px] lg:w-[350px] md:h-[300px] md:2-[4000px] h-full w-full" src="${alldata.thumbnail}" alt="Shoes" />
       <button id="Show" class="text-white bg-[#171717] rounded  absolute bottom-3 right-3 ">${alldata.others.posted_date?hhmmss((parseFloat(alldata.others.posted_date))):''}</button>
       </div>
        <div class="flex flex-1 mt-5 lg:gap-8 sm:gap-2">
        <div class="w-[15%]">
        <img class="h-8 w-12 rounded-[50%]" src=${alldata.authors[0].profile_picture}alt="">
        </div>
        <div>
        <h2 class="text-[#171717] font-bold text-lg">${alldata.title}</h2>
        <div class="flex items-center gap-1">
        <p class="text-[#171717b3] text-sm">${alldata.authors[0].profile_name}</p>
        <div>${alldata.authors[0].verified?'<img src="img/verified.svg" alt="">':''}</div>
       </div>
           <p class="text-[#171717b3] text-sm">${alldata.others.views}</p>
         </div>
       </div>
     </div>
       `
       allButton.appendChild(NewDiv)
   })
   if(AllDatas.length===0){
    noDiv()
}
else{
  NOdiv()
}
  }
function noDiv() {
  const NoDivs = document.getElementById('NoDivs')
  NoDivs.classList.remove('hidden')
}
function NOdiv(){
  const NoDivs = document.getElementById('NoDivs')
  NoDivs.classList.add('hidden')
}

function hhmmss(totalSecond){
  const x = parseFloat(totalSecond)
  let hours = Math.floor((x/3600));
  let minutes = Math.floor((x-(hours*3600))/60);
  return (`${hours} hrs ${minutes} min ago`)
}
dataload()
catagoriDataload('1000')
