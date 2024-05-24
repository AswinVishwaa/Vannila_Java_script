function roller(){
    const numofdice = document.getElementById("numofdice").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const picture =[];
    for(let i =0;i<numofdice;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        picture.push(`<img src = "image/${value}.png" alt="${value}dice">`)
    }
    result.textContent = `result : ${values.join(", ")}`;
    images.innerHTML = picture.join(" ");
}