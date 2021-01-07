$(document).ready(function() {
    $('body').on('input blur', '.form-group__input', function(event) {
        let $elem = $(this);
        if ($elem.next('.form-group__placeholder').length > 0) {
            if ($elem.val().length == 0) {
                $elem.removeClass('is_changed');
            } else {
                $elem.addClass('is_changed');
            }
        }
    });
    $('body').on('focus', '.form-group__input', function(event) {
        let $elem = $(this);
        if ($elem.next('.form-group__placeholder').length > 0) {
            $elem.addClass('is_changed');
        }
    });
})


$(document).ready(function () {
    $('body').on('input blur', '.form-group__input', function(event) {
        let $elem = $(this)
    })
})