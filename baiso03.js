
let arr=['nguyen','mai','hoa'];
function renderName() {
    let text='';
    for (let i = 0; i < arr.length; i++) {
        text+=`<li>${arr[i]}</li>`;
    }
    document.getElementById('nameList').innerHTML=text;
}
renderName();

