const baseurl = "http://localhost:62538/api";

$(() => {
    $("#pkbutton").on("click", () => {
        getPK();
    });
});

const getPK =() => {
    let id =$("#ppk").val();
    $.getJSON(`${baseurl}/users/${id}`)
    .done(res => {
        console.log(res);
            displaySingle(res);
    });
}

const displaySingle = (user) => {
    $("#uid").val(user.id);
    $("#uusername").val(user.username);
    $("#ufirstname").val(user.firstname);
    $("#ulastname").val(user.lastname);
    $("#uphone").val(user.phone);
    $("#uemail").val(user.email);
    $("#uisReviewer").val(user.isReviewer);
    $("#uisadmin").val(user.isadmin);

}

const getAll = () => {
    $.getJSON(`${baseurl}/users`)
    .done(res => {
        console.log(res);
        display(res);
    });
    
    const display = (users) => {
        let tbody =$("tbody");//or $("#users");
        tbody.empty();
        for(let user of users) {
            let tr = $("<tr></tr>");
            let tdId = $(`<td>${user.Id}</td>`);
            let tdusername = $(`<td>${user.username}</td>`);
            let tdfirstname = $(`<td>${user.firstname}</td>`);
            let tdlastname = $(`<td>${user.lastname}</td>`);
            let tdphone = $(`<td>${user.phone}</td>`);
            let tdemail = $(`<td>${user.email}</td>`);
            let tdisReviewer = $(`<td>${user.isReviewer}</td>`);
            let tdisadmin = $(`<td>${user.isadmin}</td>`);
            tr.append(tdId)
            .append(tdusername).append(tdfirstname).append(tdlastname)
            .append(tdphone).append(tdemail).append(tdisReviewer)
            .append(tdisadmin)
            tbody.append(tr);            
        }

    }
}
//getAll();

