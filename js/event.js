$(function () {

    function check_the_number(data_num) {

        var error = '';
        var has_num = data_num;
        var regexp = /^\d+\.\d+$|^\d+$|^\.\d+$|^\d+\.$/;

        if (has_num == '' || null) {
            error = 'Введіть значення!';
        } else if (regexp.test(has_num)) {
            error = '';
        } else {
            error = 'Введене значення повинне бути быльший 0 !';
        };

        return error;
    };

    function fix_the_number(data_num) {
        var regexp = /^\.\d+$|^\d+\.$/;
        if (regexp.test(data_num)) {
            regexp = /^\.\d+$/;
            if (regexp.test(data_num)) {
                return '0' + data_num;
            } else {
                return data_num + '0';
            };
        };

        return data_num;

    };

    function check_the_name(data_num) {

        var error = '';
        var has_num = data_num;
        var regexp = /^[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]/;

        if (has_num == '' || null) {
            error = 'Введіть значення!';
        } else if (regexp.test(has_num)) {
            error = '';
        } else {
            error = 'Невірні дані. Поле має містити латинські символи у формті "Ivanov Ivan Ivanovuch"!';
        };

        return error;
    };

    function check_the_telephone(data_num) {

        var error = '';
        var has_num = data_num;

        var regexp = /^\+\d{2}\(\d{3}\)\-\d{3}\-\d{2}\-\d{2}$/;

        if (has_num == '' || null) {
            error = 'Введіть значення!';
        } else if (regexp.test(has_num)) {
            error = '';
        } else {
            error = 'Невірні дані. Форрмат має бути +ХХ(ХХХ)ХХХ-ХХ-ХХ!';
        };

        return error;

    };

    function check_the_email(data_num) {
        var regexp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
        var error = '';
        var has_num = data_num;

        if (has_num == '' || null) {
            error = 'Введіть значення!';
        } else if (regexp.test(has_num)) {
            error = '';
        } else {
            error = 'Невірні дані!';
        };

        return error;

    };


    $('.spec input').change(function () {
        var data_num = $(this).val();
        var error = check_the_number(data_num);

        if (error != '') {
            $(this).val('');
            $(this).attr("data-title", error);
            $(this).addClass('errorclass');
        } else {
            $(this).val(fix_the_number(data_num));
            $(this).removeClass('errorclass');
        };

    });

    $('#name').change(function () {
        var data_num = $(this).val();
        var error = check_the_name(data_num);

        if (error != '') {
            $(this).attr("data-title", error);
            $(this).addClass('errorclass');
        } else {
            $(this).removeClass('errorclass');
        };
    });

    $('#telephone').change(function () {
        var data_num = $(this).val();
        var error = check_the_telephone(data_num);

        if (error != '') {
            $(this).attr("data-title", error);
            $(this).addClass('errorclass');
        } else {
            $(this).removeClass('errorclass');
        };
    });

    $('#telephone').keyup(function () {

        var data_num = $(this).val();

        if (data_num.length == 3) {
            $(this).val(data_num + '(');
        } else if (data_num.length == 7) {
            $(this).val(data_num + ')-');
        } else if (data_num.length == 12) {
            $(this).val(data_num + '-');
        } else if (data_num.length == 15) {
            $(this).val(data_num + '-');
        };

    });

    $('#email').change(function () {
        var data_num = $(this).val();
        var error = check_the_email(data_num);

        if (error != '') {
            $(this).attr("data-title", error);
            $(this).addClass('errorclass');
        } else {
            $(this).removeClass('errorclass');
        };

    });

    function showError(elem) {
        if (elem.hasClass('shoverror')) {
            elem.removeClass('shoverror');
        } else {
            elem.addClass('shoverror');
        };

    };

    $('input').mouseover(function (e) {
        var title = $(this).attr("data-title");
        if (title != undefined) {
            $('#hint').css({
                'left': e.pageX + 10,
                'top': e.pageY + 10
            });
            $('#hint').show().text(title);
        };
    }).mouseout(function () {
        $('#hint').hide();
    });

    $('#send').click(function () {
        $('input').each(function (ind, elem) {

            var id = $(this).attr('id');
            var data_num = $(this).val();

            if (id == 'name') {
                var error = check_the_name(data_num);

                if (error != '') {
                    $(this).attr("data-title", error);
                    $(this).addClass('errorclass');
                } else {
                    $(this).removeClass('errorclass');
                };
            } else if (id == 'telephone') {
                var error = check_the_telephone(data_num);

                if (error != '') {
                    $(this).attr("data-title", error);
                    $(this).addClass('errorclass');
                } else {
                    $(this).removeClass('errorclass');
                };
            } else if (id == 'email') {
                var error = check_the_email(data_num);

                if (error != '') {
                    $(this).attr("data-title", error);
                    $(this).addClass('errorclass');
                } else {
                    $(this).removeClass('errorclass');
                };
            } else if (id == 'comment' || id == 'send') {

            } else {
                var error = check_the_number(data_num);

                if (error != '') {
                    $(this).val('');
                    $(this).attr("data-title", error);
                    $(this).addClass('errorclass');
                } else {
                    $(this).val(fix_the_number(data_num));
                    $(this).removeClass('errorclass');
                };
            };

        });
    });

    /*$('.rg-image-nav-prev').click(function(){
        var listItem = $( ".es-carousel ul" );
        setParameters($('li' ).index(listItem));
    });
    
    function setParameters(ind){
        console.log(qvaliticars[ind]);
    };*/
    
});