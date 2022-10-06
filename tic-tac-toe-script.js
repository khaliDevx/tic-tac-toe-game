const indexes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function initArray(){
    return [
        10, 10, 10,
        10, 10, 10,
        10, 10, 10
    ]
}
var array = initArray();

function checkWinner() {
    
    for (var i = 0; i < indexes.length; i++){
        var sum = array[indexes[i][0]] + array[indexes[i][1]] + array[indexes[i][2]];
        if(sum == 0){
            setTimeout(function () { displayO(); }, 500);
            $('#countO').text(parseInt($('#countO').text()) + 1);
            setTimeout(function () { restart(); }, 1000);
            setTimeout(function () { $('.boxes').addClass('boxOut') }, 1000);
            return
        }
        else if (sum == 3){
            setTimeout(function () { displayX(); }, 500);
            $('#countX').text(parseInt($('#countX').text()) + 1);
            setTimeout(function () { restart(); }, 1000);
            setTimeout(function () { $('.boxes').addClass('boxOut') }, 1000);
            return
        }  
    }
    if (!array.includes(10)) {
        setTimeout(function () { displayEqual(); }, 700);
        setTimeout(function () { $('.boxes').addClass('boxOut') }, 700);
        setTimeout(function () { restart(); }, 1000);
        return
    }
}

// function checkWinner() {
//     const row1 = array[0] + array[1] + array[2];
//     const row2 = array[3] + array[4] + array[5];
//     const row3 = array[6] + array[7] + array[8];
//     const col1 = array[0] + array[3] + array[6];
//     const col2 = array[1] + array[4] + array[7];
//     const col3 = array[2] + array[5] + array[8];
//     const rotate1 = array[0] + array[4] + array[8];
//     const rotate2 = array[2] + array[4] + array[6];
//     if (row1 == 0 || row2 == 0 || row3 == 0 || col1 == 0 || col2 == 0 || col3 == 0 || rotate1 == 0 || rotate2 == 0){
//         console.log('O is winner')
//     } else if (row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3 || rotate1 == 3 || rotate2 == 3) {
//         console.log('X is winner')
//     }
// }

function changePlayers(){
    $('#playerX').toggleClass('active');
    $('#playerO').toggleClass('active');
}
$(".boxes").click(function () {
    if (!$(this).find(".a").hasClass('done')) {
        const index = $(this).data("index");
        if ($('#playerX').hasClass('active')){
            $(this).find(".a").addClass("x x2 done")
            $(this).find(".b").addClass("x x1")
            $('#x_o').text('O')
            array[index] = 1; // 1 = X
        }
        else {
            $(this).find(".a").addClass("o1 done")
            $(this).find(".b").addClass("o2")
            $('#x_o').text('X')
            array[index] = 0; // 0 = O
        }
        changePlayers();
        checkWinner();
    }
});
function restart(){
    $(".temp").removeClass('x x1 x2 o1 o2 done');
    array = initArray();
    $('#playerX').addClass('active');
    $('#playerO').removeClass('active');
    $('.winner').removeClass('resultFadeout');
    $('#x_o').text('X')

}

$(".retry").click(function () {
    restart()
    $(".boxes").removeClass("boxOut")
    hideO()
    hideX()
    hidEqual()
});

function displayX(){
    $('.winnerX').css("visibility", "visible");
    $('#rotateX1').addClass('winnerX1')
    $('#rotateX2').addClass('winnerX2')
    $('.winner').text('WINNER!')
}
function hideX() {
    $(".winnerX").css("visibility", "hidden");
    $('#rotateX1').removeClass('winnerX1')
    $('#rotateX2').removeClass('winnerX2')
    $('.winner').addClass('resultFadeout');
    $('.winner').empty();
}


function displayO(){
    $('.winnerO').css("visibility", "visible");
    $('#rotateO1').addClass('winnerO1')
    $('#rotateO2').addClass('winnerO2')
    $('.winner').text('WINNER!')
}
function hideO(){
    $('#rotateO1').removeClass('winnerO1')
    $('#rotateO2').removeClass('winnerO2')
    $(".winnerO").css("visibility", "hidden");
    $('.winner').addClass('resultFadeout');
    $('.winner').empty();
}

function displayEqual(){
    $('.xEqualo').css("visibility", "visible");
    $('#xE').css("visibility", "visible");
    $('#oE').css("visibility", "visible");
    $('#xE').addClass('xEqual')
    $('#oE').addClass('oEqual')
    $('.equal').text('EQUAL!')
}
function hidEqual(){
    $('#xE').css("visibility", "hidden");
    $('#oE').css("visibility", "hidden");
    $(".xEqualo").css("visibility", "hidden");
    $('.equal').empty();
}