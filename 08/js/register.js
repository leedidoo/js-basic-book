function newRegister(){
    var newP = document.createElement("p"); // 새 p요소 생성
    var userName = document.querySelector("#userName"); // 텍스트 필드 내용 가져오기
    var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
    newP.appendChild(newText); // newText 노드를 newP 노드의 자식 노드로 연결하기

    var delBtn=document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn); // delBtn 노드를 newP 노드의 자식 노드로 연결하기

    var nameList = document.querySelector("#nameList"); // nameList 가져옴
    nameList.appendChild(newP); // newP 노드를 nameList 노드의 자식 노드로 연결하기
    userName.value = "";// 다음 이름을 입력할 수 있도록 텍스트 필드 비우기

    var removeBtns=document.querySelectorAll(".del");

    for(var i=0; i<removeBtns.length; i++){
        removeBtns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode)
                this.parentNode.parentNode.removeChild(this.parentNode);
    
        });
    }
}
