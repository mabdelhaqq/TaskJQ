$(document).ready(function(){
    let leftB = $('.left-box');
    let rightB = $('.right-box');
        $('#m-to-right').click(function(){
            if(leftB.children().length > 0 ){
                let spB = leftB.children().first().detach();
                rightB.append(spB);
            }
            else {
                alert("There are no more boxes to move!");
            }
                });
                $('#m-to-left').click(function(){
                    if(rightB.children().length > 0 ){
                        let spB = rightB.children().first().detach();
                        leftB.append(spB);
                    }
                    else {
                        alert("There are no more boxes to move!");
                    }
                        });
    });