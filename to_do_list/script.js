let buttonselect = document.querySelector("button")
buttonselect.addEventListener("click", fun);
function fun() {
  document.querySelector(".pop-up").style.display = "flex";
}


document.querySelector(".cross").addEventListener("click", display)

function display() {
  document.querySelector(".pop-up").style.display = "none";
}

  // var closeBtnArr = document
  //     .querySelectorAll(".icon.color-3")
  // var minimizeIcons = document
  //     .querySelectorAll(".icon.color-1")

  function crossAndminimize() {
      // var content = e.target.closes(".content");
      // console.log(content)
      // content.style.display = "none"
      let crossarr=document.querySelectorAll('.cut');
      for(let i=0;i<crossarr.length;i++)
      {
        crossarr[i].addEventListener('click',closeTicket);

      }

      let cutarr=document.querySelectorAll(".min");
      for(let i=0;i<cutarr.length;i++)
      {
           cutarr[i].addEventListener('click',minimize);
      }


      function closeTicket(e)
      {
          //  console.log(e.target.closest('.content'));
            let content=e.target.closest('.content');
            // let contentcut=content.document.querySelector(".cut");
            content.style.display='none';
      }

      function minimize(e)
      {
        let content=e.target.closest('.content');
        let textarea1=content.querySelector('.main1-textarea')
        if(textarea1.style.display !=='none')
        {
          textarea1.style.display='none'
        }
        else{
          textarea1.style.display='flex'
        }
      } 

  }



let submitbtn = document.querySelector(".add button")
submitbtn.addEventListener("click", addTicket);
function addTicket() {
  display();
  var main1 = document.querySelector(".main1");
  var puranahtml = main1.innerHTML;
  var title1 = document.querySelector(".title input");
  var innertext = document.querySelector(".area").value;
  console.log(innertext)


  main1.innerHTML = puranahtml + `
  <div class="content">
  <div class="header1">${title1.value}
    <div class="min-cut">
      <div class="min">-</div>
      <div class="cut">x</div>
    </div>


  </div>

  <div class="main1-textarea">
    <textarea rows="8" cols="31" class="text-area">${innertext} </textarea>
  </div>
</div>`
  title1.value="";
  innertext="";
  // main1.querySelector(".text-area").value = innertext
  
  
  crossAndminimize();

}

