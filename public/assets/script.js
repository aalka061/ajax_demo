$(function(){
    //GET request
    $('#getProduct').on('click', function(){
        $.ajax({

            url: '/products',
            contentType: 'application/json',
            success: function(res) {
                
                var tobodyElement = $('tbody');

                tobodyElement.html('');

                res.products.forEach(function(product){
                    
                    tobodyElement.append('\
                        <tr>\
                             <td class="id">' + product.id + '</td>'+ 
                             '<td> <input type="text" class="name" value="' + product.name +'">' + '</td>'+ 
                             '<td>\
                                  <button class="updateButton"> Update/PUT </button>\
                                  <button class="deleteButton"> DELETE </button>\
                             </td>\
                        </tr>');
                })
            }
        })
    })

    $('#createProductForm').on('submit', function(event){

        event.preventDefault();

        var createInput = $('#user-input');
        $.ajax ({
            url: '/products',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({name: createInput.val()}),
            success: function (res){
                console.log(res);
                createInput.val('');
                $('#getProduct').click();
                
            }

        })
    })

    //Post request 

    
});