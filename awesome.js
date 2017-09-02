for(var i = 1; i <= 151; i++){
    $('#pokePictures').append("<img id='"+i+"'src='http://pokeapi.co/media/img/"+i +".png'>");
}

$('#pokePictures img').click(function(){
    var pokeNum = $(this).attr('id');
    var image = $(this).attr('src');
    $.get("http://pokeapi.co/api/v1/pokemon/"+pokeNum+"/", function(res){
        var message = "<h2>";
        var pokeName = res['name'];
        var height = res['height'];
        var weight = res['weight'];

        message += pokeName + "</h2><img class='infoImg' src='"+image+"'><h4>Types</h4><ul>";

        for(var i = 0; i < res.types.length; i++){
            message += "<li>"+res.types[i]['name']+"</li>";
        }
        message += "</ul><h4>Height</h4><ul><li>"+height+"</li></ul><h4>Weight</h4><ul><li>"+weight+"</li></ul>";

        $('#pokeInfo').html(message);
    }, "json");
});