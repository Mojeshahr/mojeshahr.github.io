//فعال بودن و یا نبودن navbar

function checkActiveTab() {
  var url = window.location.href;
  var urlArray = url.split("#");
  var activeSharpSign = urlArray[1];
  var i = 0;
  var menuItems = document.getElementsByClassName("menu-item");
  for (i; i < menuItems.length; i++) {
    var fullURL = menuItems[i].firstChild.href;
    var endurl = fullURL.split("#")[1];
    alert(endurl);
  }
}

function activeTab(e) {
  window.location.hash = e;
  var position =
    document.getElementById(e).offset().top -
    container.offset().top +
    container.scrollTop();
  container.animate({
    scrollTop: position,
  });

  // alert(thisurl);
}
window.addEventListener("load", function(event) {
  if (window.location.hash) {
    var hash = window.location.hash.split('#')[1];
    document.getElementById("input" + hash).checked = true;
  }
});


//show code 
function showCode(e){
  var number = e;
  var selectElement = document.getElementById(number + "_codeType");
  codeIdShow = selectElement.value;
  i=0;
  var parentCode = document.getElementsByClassName(number + "_code");
  for(i; i< parentCode.length; i++){
    console.log(parentCode[i].classList.contains('active'));
    if(parentCode[i].classList.contains('active')){
      parentCode[i].classList.remove("active");
      parentCode[i].classList.add("deactive");
    }else{
      parentCode[i].classList.add("deactive");
    }
  }
  document.getElementById(codeIdShow).classList.remove("deactive");
  document.getElementById(codeIdShow).classList.add("active");
}

//solve clipoard in chtome and mozila
function copyToClipboard(textToCopy) {
  if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
  } else {
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}
//copt to clipboard
function coyCodeToClipboard(e){
var copyButton = e;
var preCode = e.nextElementSibling.innerText;
 copyToClipboard(preCode)
//   window.navigator.clipboard.writeText(preCode);
copyButton.innerText = "کپی شد!";
setTimeout(() => {
  copyButton.innerText = "کپی"
}, 1000);
}