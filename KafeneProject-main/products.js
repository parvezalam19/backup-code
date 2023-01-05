$(document).ready(function () {
    if(localStorage.getItem('loginStatus') !== 'true'){
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logout-button');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('loginStatus', false)
        location.assign('./index.html')
    }
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
        function (data) {
            data.map((item,pos) => {    
                createRows(item)
                $('#count').html(data.length)
            })
        },
    );
    function createRows(data) {
        let tr = (`
        <tr class="content-row">
            <td class="secondary-text">${data.id}</td>
            <td class="primary-text">${data.medicineName}</td>
            <td class="secondary-text">${data.medicineBrand}</td>
            <td class="primary-text">${data.expiryDate}</td>
            <td class="secondary-text">$${data.unitPrice}</td>
            <td class="secondary-text">${data.stock}</td>
        </tr>`)
        $('#content-body').append(tr);
    }


    
    var expiredCheckBox = document.getElementById('expiredCheckBox');
    expiredCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('content-body');
        let tablerow = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tablerow.length; i++) {
            let td = tablerow[i].getElementsByTagName('td')[3];
            if (td) {
                let textValue = mydate(td.textContent || td.innerHTML);
                function mydate (date) {
                    let arr = date.split('-');
                    return arr.join(' ')
                }
                if (new Date(textValue).getTime() < new Date().getTime()){
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


    var lowStockCheckBox = document.getElementById('lowStockCheckBox');
    lowStockCheckBox.addEventListener('change', function (e) {
        e.preventDefault();
        let tablebody = document.getElementById('content-body');
        let tablerow = tablebody.getElementsByTagName('tr');
        for (let i = 0; i < tablerow.length; i++) {
            let td = tablerow[i].getElementsByTagName('td')[5];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue < 100){
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
