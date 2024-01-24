function Book(title, author,volume ,price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html=new Book('웹 표준의 정석','ko','608','28000');
var youtube=new Book('유튜브 영상 만들기','kim','368','16000');
var python=new Book('점프 투 파이썬','park','352','18000');
var bookList=[html,youtube,python];

document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i=0;i<bookList.length;i++) {
    document.write("<p>"+bookList[i].title+"</p>");
}