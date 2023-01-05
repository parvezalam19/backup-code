$(document).ready(function () {
    if (localStorage.getItem('loginStatus') !== 'true') {
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    let res;
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            res = data;
            data.map((items, index) => {
                createRows(items)
                $('#count').html(data.length);
                console.log(items)
            })
        },
    );
    function createRows(data) {
        
        let tr = (`
        <tr class="content-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.customerName}</td>
            <td class="primary-text">${data.orderDate}<br><span class="secondary-text">${data.orderTime}</span></td>
            <td class="secondary-text">$${data.amount}</td>
            <td class="primary-text">${data.orderStatus}</td>
        </tr>`)
        $('#content-body').append(tr);
    }


    var newCheckBox = document.getElementById('newCheckBox');
    newCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('content-body');
        let tablerow = tablebody.getElementsByTagName('tr');
        // console.log(tr.length)
        for (let i = 0; i <tablerow.length; i++) {
            let td = tablerow[i].getElementsByTagName('td')[4];
            console.log(td)
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'New'){
                    if(this.checked === true){
                        tablerow[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tablerow[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
        console.log(tablebody.getElementsByTagName('tr').length)
    })



    var DeliveredCheckBox = document.getElementById('DeliveredCheckBox');
    DeliveredCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('content-body');
        let tablerow = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tablerow.length; i++) {
            let td = tablerow[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'Delivered'){
                    if(this.checked === true){
                        tablerow[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tablerow[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    var IntransitcheckBox = document.getElementById('IntransitcheckBox');
    IntransitcheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('content-body');
        let tablerow = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tablerow.length; i++) {
            let td = tablerow[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'InTransit'){
                    if(this.checked === true){
                        tablerow[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tablerow[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })




    var PackedCheckBox = document.getElementById('PackedCheckBox');
    PackedCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('content-body');
        let tablerow = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tablerow.length; i++) {
            let td = tablerow[i].getElementsByTagName('td')[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === 'Packed'){
                    if(this.checked === true){
                        tablerow[i].style.display = "";
                        $('#count').html(parseInt($('#count').html()) + 1 );
                    }else{
                        tablerow[i].style.display = "none";
                        $('#count').html(parseInt($('#count').html()) - 1 );
                    }     
                }
            }
        }
    })
});
