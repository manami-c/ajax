$(
    () => {

        var user = {
            id: 0, username:"zz", password: "xx",
            firstname:"xx", lastname: "xx",
            phone:"911", email: "911@help.com",
            isReview: true, isadmin: true
        }

        $.ajax({
            method: "POST",
            url: "http://localhost:62538/api/users",
            data: JSON.stringify(user),
            contentType: "application/json"
        })
            .done(res => {
                console.log(res);
                getAll();
        })
            .fail(err => {
                console.error(err);
            });
            
const getAll = () => {
    $.getJSON("http://localhost:62538/api/users")
    .done(users => {
        console.log(users);
    });
    console.log("After the getJSON call");
    }
}
)