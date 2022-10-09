checkDate = () => {
    let day = $(".day").val();
    let month = $(".month").val();
    if (day < 0 || day > 31 || month < 0 || month > 12) {
        return false;
    }
    switch (month) {
        case 2:

            if (day > 29) {
                return false;
            }
            break;

        case 4: case 6: case 9: case 11:
            if (day > 30) {
                return false;
            }

        default:
            break;
    }
    return true;
}

$(document).ready(function(){
    $("button").on("click", function(){
        let check = checkDate();
        if(check){
            alert("hợp lệ");
        }else{
            alert("không hợp lệ")
        }
    })
  });