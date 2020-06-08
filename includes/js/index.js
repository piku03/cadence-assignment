var indexPage = {};
indexPage.Components = {};
var totalItems, currentIndex;

indexPage.Components = function() {
    this.init = function() {
          _numBind();
        this.attachEvents();
    };

    this.attachEvents = function() {
        _initClickEvents();
        // Attach all window events under this.
        //_addWindowEvents()
    };

    var _initClickEvents = function () {
        $(".myBtn").on("click", _toogleShow);
        $('.carousel-control-prev,.carousel-control-next').click('slid', _clickNumBind);
       
        
    };

    var _numBind = function() {
        $('.carousel').carousel({
            interval: false,
        });
        totalItems = $('.carousel-item').length;
        currentIndex = $('.carousel-item.active').index() + 1;
        $('.slide-count').html('0'+currentIndex+'/'+'0'+totalItems+'');
        var slider= $(".slide-all").clone();
        $(".slide-all").remove();
        $(".carousel-item .content").append(slider);
        
    };
    var _clickNumBind = function(event) {
        if($(".carousel-item").hasClass('active')){
            $(".myBtn").html("Read More +");
        }
        _toogleShow();
        if(currentIndex > 0 && currentIndex < totalItems) {
            $(".carousel-control-next").removeAttr('disabled');
            $(".carousel-control-prev").removeAttr('disabled');
        }
        if($(event.target).attr('class') == "carousel-control-next"){
            if(currentIndex < totalItems) {
                currentIndex = currentIndex + 1;
                $('.slide-count').html('0'+currentIndex+'/'+'0'+totalItems+'');
                $(".carousel-control-next").removeAttr('disabled');              
            } else {
                $(".carousel-control-next").attr('disabled',true);
            }            
        } else {            
            if(currentIndex > 1) {
                currentIndex = currentIndex - 1;
                $('.slide-count').html('0'+currentIndex+'/'+'0'+totalItems+'');
                $(".carousel-control-prev").removeAttr('disabled');
            } else {
                $(".carousel-control-prev").attr('disabled',true);
            }
        }
    }
    var _toogleShow = function(e) {
        if($(event.target).attr('class')=="myBtn hidden") {
            $(".more").show();
            $(this).addClass("showing");
            $(this).removeClass("hidden");
            $(this).empty().html("Read Less -");
        } else{
            $(".more").hide();
            $(this).addClass("hidden");
            $(this).removeClass("showing");
            $(this).empty().html("Read More +");
        }
    }

};

$(document).ready(function () {
    indexPage = new indexPage.Components();
    indexPage.init();
})