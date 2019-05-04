//The signup validation

$(document).ready(function () {
    jQuery.validator.addMethod("lettersAndNumbers", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    }, "Please enter only letters and numbers");

    jQuery.validator.addMethod("letters", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/.test(value);
    }, "Please enter only letters");

    $('#sign_up_form').validate({ // initialize the plugin
        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
                minlength: 8,
                lettersAndNumbers: true
            },
            fName: {
                required: true,
                letters: true
            },
            lName: {
                required: true,
                letters: true
            },
            email: {
                required: true,
                email: true
            }
        }
    });
});
$(document).ready(function () {
    $("#register_form").submit(function(e) {
        e.preventDefault();
       Submit();
    });
});
