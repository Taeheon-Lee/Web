function LinkssetColor(color){
    var alist = document.querySelectorAll('a');
    for (var i = 0; i < alist.length; i++) {
            alist[i].style.color=color;
        }
}
var body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body').style;
    if(self.value === 'night') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'day';
        LinkssetColor('powderblue');
    }
    else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'night';
        LinkssetColor('blue');
    }
}