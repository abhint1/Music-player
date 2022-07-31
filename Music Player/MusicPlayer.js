// document.querySelector(".one").innerHTML="<h1>Hello</h1>"

// let ele =document.createElement("h1");

// ele.append("Hello")
// console.log(ele);

// document.querySelector(".one").append(ele)

// let d=document.createElement("div")
// d.classList.add("two")


// let h=document.createElement('h1')
// h.append("new")
// d.append(h);


// document.querySelector(".one").append(d);


// Project js 

let musics=[


    {
        id:1,
        name:"Kesariya",
        Singer:"Arijit Singh",
        audioSrc:"Audio/Kesariya - NewPagalworld.Com.mp3",
        imageSrc:"Thumbnails/Kesariya_song.webp"
    },
    {
        id:2,
        name:"Amplifier",
        Singer:"Imran Khan",
        audioSrc:"Audio/y2mate.com - Imran Khan  Amplifier Official Music Video.mp3",
        imageSrc:"Thumbnails/Imran-Khan-Amplifier-Song-Lyrics-1.jpg"
    },
    {
        id:3,
        name:"Kana Yaari",
        Singer:"Coke Studio",
        audioSrc:"Audio/S14S02_Kana_Yaari.mp3",
        imageSrc:"Thumbnails/KANA Yari.jpg"
    },
    {
        id:4,
        name:"Kya Khoob lagti ho",
        Singer:"Mukesh Kanchan",
        audioSrc:"Audio/y2mate.com - Kya Khoob Lagti Ho Mukesh Kanchan Dharmatma 1975 Hema Malini Feroz Khan Mukesh Kanchan.mp3",
        imageSrc:"Thumbnails/kya khoob lgti ho.jfif"
    }
]


{/* <div class="tile">

<div class="thumbnail">
    <img src="images/blankimage.jpg"/>

</div>

<div class="description">

</div>

</div> */}




for(let i=0;i<musics.length;i++)
{
    musics[i]
    
    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");

    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");

    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].Singer);
    description.append(h3);

    tile.append(description);
    tile.addEventListener('click',function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}


function playMusic(musics)
{
    
    document.querySelector(".Player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=musics.imageSrc;
    document.querySelector(".song-name").innerText=musics.name;
    document.querySelector(".song-artist").innerText=musics.Singer;
    document.querySelector(".audio").src=musics.audioSrc;
    document.querySelector(".audio").play();


}


function closePlayer()
{
    document.querySelector(".Player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();

}



