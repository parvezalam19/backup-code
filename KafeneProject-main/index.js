$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
        location.assign('./orders.html')
    }
    let loginForm = window.document.getElementById('loginform');
    loginForm.onsubmit = function (e) {
        e.preventDefault();
        let loginDetails = {
            username: this.username.value,
            password: this.password.value
        }
        if (loginDetails.username === loginDetails.password) {
        //    console.log(loginDetails.password)
            // $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login", JSON.stringify(loginDetails),
                // function (data, Status, req) {
                    alert('Login Successful!!')
                    location.replace('./orders.html')
                    window.localStorage.setItem('loginStatus',true)
                   console.log('click')
            
                
        
        } else {
            alert(`Please Enter Valid Username & Password ${loginDetails.username} ${loginDetails.password}`)
        }
    }
    $('.navbar-menu-items').click(function (event) { 
        event.preventDefault();
        $('.active').removeClass('active');
        $(event.target).addClass('active')
        
    });
});