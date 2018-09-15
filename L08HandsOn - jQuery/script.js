$(document).ready(function(){
    example1();
    example2();
    example3();
    example4();
    });
    const example1 = ()=> {
        $("header").hover(function(){
            $(this).css("color","red");
        }, function(){
            $(this).css("color","black");
        });
    }
    const example2 = () =>{
        $("p").click(function(){
              $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
        });
    }
    const example3 = () =>{
        $("li").dblclick(function(){
            $(this).hide();
        });
    }
    
    const example4 = () => {
        $("input").keydown(function(){
            $(this).toggleClass("red");
        });

    }