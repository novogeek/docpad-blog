$(document).ready(function () {
    if (!$('#myCanvas').tagcanvas({
        textColour: '#2c3e50',
        outlineColour: '#2c3e50',
        initial: [0.1, -0.1],
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05
    }, 'divTagList')) {
        // something went wrong, hide the canvas container
        $('#divTagCanvas').hide();
    }
});