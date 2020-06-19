var i ;

function myprompt()
    {
        var person =prompt("小明的媽媽有三個小孩，其中兩個叫二郎和三郎，請問最後一個孩子叫什麼名字？","名字");
        if(person != "小明" ){ 
            alert("錯誤，下次再努力!"); 
            close('fraud.html');}
        else{alert("1/6");}
    }
function myprompt2()
    {
        var person =prompt("一位農夫有15隻羊，除了8隻以外都死掉了。農夫還剩幾隻羊？","0");
        if(person != "8" ){
            alert("錯誤，下次再努力!"); 
            close('fraud.html');}
        else{alert("2/6");}
    }
function myprompt3()
    {
        var person =prompt("如果你在賽跑中跑贏了第二名，那麼你現在是第幾名？","第一名");
        if(person != "第二名" ){
            alert("錯誤，下次再努力!"); 
            close('fraud.html');}
        else{alert("3/6");}
    }
function myprompt4()
    {
        var person =prompt("你能從100之中拿出2幾次？","50");
        if(person != "1" ){alert("錯誤，下次再努力!"); close('fraud.html');}
        else{alert("4/6");}
    }
 function myprompt5()
    {
        var person =prompt("有些月份有31天，有些月份有30天。那有幾個月份有28天？","1");
        if(person != "12" ){alert("錯誤，下次再努力!"); close('fraud.html');}
        else{alert("5/6");}
    }
function myprompt6()
    {
        var person =prompt("如果2個畫家能在2個小時內畫好2個房間，那麼如果要在6個小時內畫好18個房間需要幾個畫家？","8");
        if(person != "6" ){alert("錯誤，下次再努力!"); close('fraud.html');}
        else
        {
            alert("6/6"); 
            alert("恭喜您六題都答對，請於下個網站中填寫個人資料以獲得全新iPhone12!");
            open('contact.html');
            close('fraud.html');
            
        }
    }
function newlink()
    {
        open('fraud.html');
        close('index.html');
    }
function myalert()
    {
        var text = "" ;
        text = "非常感謝您填寫之個人資料，我們會善加利用。但你得不到新手機因為這是詐騙網站^^" ;
        alert(text) ;
        close();
    }