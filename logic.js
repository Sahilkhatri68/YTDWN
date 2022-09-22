 

async function clickevent() {
    let link = document.getElementsByClassName('leftip')[0].value;
    console.log(link)
    const resp = fetch(`http://localhost:4000/download?url=${link}`)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            console.log(data['info']);
            console.log(data['info'][0]);
            // console.log(data['info'][0]['hasAudio']);
            // console.log(data['info'][0]['container']);
            // console.log(data['info'][0]['url']);
            // console.log(data.thumb.high);



            var thumbpic = document.getElementsByClassName("thumbpic")[0];
            var hassound = document.getElementById("hassound");
            var quality = document.getElementById("quality");
            var downloadlink = document.getElementById("downloadlink");
            var type = document.getElementById("type");

            var cont = document.getElementsByClassName("tablebody")[0];
            var html = ``;
         

             
            
                
            for (var i = 0; i <data['info'].length; i++) {
                html =  html + ` <tr id="tableid">
                <td id="quality">  ${data['info'][i]['qualityLabel']}   </td>
                <td id="type"> ${data['info'][i]['container']} </td>
                <td id="hassound">${data['info'][i]['hasAudio']} </td>
                <td>
                    <a href="${data['info'][i]['url']}" id="downloadlink"> <button class="tabledata">
                           
                            Download &nbsp;
                            <div><i class="bi bi-download"></i></div>
                        </button></a>
                </td>
            </tr>`
            }
            cont.innerHTML = html;
            thumbpic.src=data.thumb.high['url'];
             


        })





}