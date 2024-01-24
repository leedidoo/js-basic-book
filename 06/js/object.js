var toyRobot={
    productId:"132-12",
    name:"Robot",
    price:"25000",
    madeIn: "Korea",
    quentity:10,
    showStock:function() {
        document.querySelector('#display').innerHTML= this.name+"제품은"+this.quentity+"개 남아있습니다.";
    }
};

toyRobot.showStock();