
/*  */
function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result
            changeMemePicture(uploadImage)
        })

        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObeject = [
        {
         "name": "chapolin",
         "path": "/pictures/chapolin.jpg"   
        }, 
        {
         "name":"chole",
         "path": "/pictures/chloe.jpg"
        },
        {
         "name":"funny-cat1",
         "path":"/pictures/funny-cat1.png"
        },
        {
         "name":"funny-cat2",
         "path": "/pictures/funny-cat2.png"
        },
        {
         "name":"memeMeninaOlharJugando",
         "path":"/pictures/memeMeninaOlharJugando.jpg"
        } 
]
 return memesObeject;
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#meme-list");

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
    
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url("${photo}")`
}

function buttonDownload(){
    document.querySelector("#btn-download").onclick = () =>{
        const screeshotPrint = document.querySelector("#download")

        html2canvas(screeshotPrint).then((canvas)=>{
            const base64Image = canvas.toDataURL("image/png")
            let anchor = document.createElement("a")
            anchor.setAttribute("href", base64Image)
            anchor.setAttribute("download", "my-meme.png")
            anchor.click()
            anchor.remove()
        })
    }
}

async function main(){
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList);
    await changeMemePicture(memesImageList[0].path)
    buttonDownload()
}

main()

