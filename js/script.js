$(document).ready(function(){
   $("#goBtn").click(function(){

       var msgAlert = $("#alertMsg");
       var inputField = $("#input");
       var rgb = $("#rgb");
       var resultField = $("#result");

       var color;
       var rgbColor = 'rgb(';
       var splitColor;

       var reg = new RegExp('^#?(?:[0-9a-fA-F]{3}){1,2}$', 'i'); //Regular expression for hex color

       msgAlert.addClass("hidden");

       color = inputField.val().toUpperCase().trim();

        if (reg.test(color)){
            inputField.val('');

            if (color.indexOf('#') !== -1) {
                color = color.substring(1, color.length);
            }


            if (color.length > 4) {
                splitColor = color.match( /.{2}/g);

                while (splitColor != ''){
                    rgbColor +=  parseInt(splitColor.shift(), 16) + ',';
                }
                rgbColor = rgbColor.substring(0, rgbColor.length -1) + ');';

            } else {
                splitColor = color.match( /.{1}/g);

                while (splitColor != ''){
                    var currentColor;

                    currentColor = splitColor.shift();
                    currentColor += currentColor; //Convert #abc to #aabbcc
                    rgbColor += parseInt(currentColor, 16) + ',';
                }
                rgbColor = rgbColor.substring(0, rgbColor.length -1) + ');';
            }

            color = '#' + color;
            resultField.prepend("<tr><td><div class=\"squareCol\" style=\"background:" +rgbColor+ "\"></div></td><td>" + color + "<td/><td>" + rgbColor + "</td></tr>" );
        } else {
            msgAlert.removeClass("hidden");
        }
   });
});